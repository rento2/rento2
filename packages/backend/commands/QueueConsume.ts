import { BaseCommand } from '@adonisjs/core/build/standalone'
import { Rabbit } from 'rabbit-queue'
import { QueueTaskStatus } from './../common/enums/QueueTaskStatus'
import * as handlers from './../queue'
import { Process } from './../common/interfaces/ITask'

export default class QueueConsume extends BaseCommand {
  public static commandName = 'queue:consume'
  public static description = 'Consume tasks from queue'

  public static settings = {
    loadApp: true,
  }

  public async run (): Promise<void> {
    const { default: Task } = await import('App/Models/Task')
    const { default: rabbitConfiguration } = await import('Config/rabbit')

    const { hostname, port, user, password } = rabbitConfiguration
    const rabbit = new Rabbit(`amqp://${user}:${password}@${hostname}:${port}`)

    await new Promise((resolve) => {
      void rabbit.createQueue('default', { durable: true }, async (messageContent, ack) => {
        const taskStateJson = JSON.parse(messageContent.content)
        const task = await Task
          .query()
          .where({ id: taskStateJson.id, status: QueueTaskStatus.InProcess })
          .first()

        if (!task) {
          this.logger.warning('Task accepted and ack\'ed, but row in db not found - old message or already done task')
          return resolve(ack())
        }

        try {
          const result = await handlers[task.handler].default(new Process(task))
          await task.merge(result.task).save()
        } catch (e) {
          await task.merge({
            status: QueueTaskStatus.Error,
            error: String(e),
          }).save()
        }

        this.logger.success(`Task completed: ${task.id}`)
        return resolve(ack())
      })
    })
  }
}

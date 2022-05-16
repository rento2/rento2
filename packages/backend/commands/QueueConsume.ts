import { BaseCommand } from '@adonisjs/core/build/standalone'
import { Rabbit } from 'rabbit-queue'
import rabbitConfiguration from 'Config/rabbit'
import Task from 'App/Models/Task'
import { QueueTaskStatus } from './../common/enums/QueueTaskStatus'
import * as handlers from './../queue'
import { Process } from './../common/interfaces/ITask'

export default class QueuePublish extends BaseCommand {
  public static commandName = 'queue:consume'
  public static description = 'Consume tasks from queue'

  public static settings = {
    loadApp: false,
    stayAlive: false,
  }

  public async run (): Promise<void> {
    const { hostname, port, user, password } = rabbitConfiguration
    const rabbit = new Rabbit(`amqp://${user}:${password}@${hostname}:${port}`)

    await rabbit.createQueue('default', { durable: true }, async (messageContent, ack) => {
      const task = await Task.find(messageContent)
      if (!task) {
        throw new Error('Task not found')
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

      return ack(null)
    })

    this.logger.success('All tasks published')
  }
}

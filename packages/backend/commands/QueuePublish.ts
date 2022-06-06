import { BaseCommand } from '@adonisjs/core/build/standalone'
import { QueueTaskStatus } from '../common/enums/QueueTaskStatus'
import { Rabbit } from 'rabbit-queue'

export default class QueuePublish extends BaseCommand {
  public static commandName = 'queue:publish'
  public static description = 'Publish tasks to messages queue'

  public static settings = {
    loadApp: true,
  }

  public async run (): Promise<void> {
    const { default: Task } = await import('App/Models/Task')
    const { default: rabbitConfiguration } = await import('Config/rabbit')

    const { hostname, port, user, password } = rabbitConfiguration
    const rabbit = new Rabbit(`amqp://${user}:${password}@${hostname}:${port}`)
    await rabbit.createQueue('default')

    const tasks = await Task.query().where('status', QueueTaskStatus.Pending)
      .andWhere('startAt', '<=', new Date())
      .orderBy('startAt', 'asc')
    await Promise.all(tasks.map(async task => {
      return await Promise.all([
        Task.query().where('id', task.id).update({ status: QueueTaskStatus.InProcess }),
        rabbit.publish('default', task)
      ])
    }))

    this.logger.success(`${tasks.length} tasks published`)
  }
}

import { BaseCommand } from '@adonisjs/core/build/standalone'
import { Rabbit } from 'rabbit-queue'
import rabbitConfiguration from 'Config/rabbit'
import Task from 'App/Models/Task'

export default class QueuePublish extends BaseCommand {
  public static commandName = 'queue:publish'
  public static description = 'Publish tasks to messages queue'

  public static settings = {
    loadApp: false,
    stayAlive: false,
  }

  public async run (): Promise<void> {
    const { hostname, port, user, password } = rabbitConfiguration
    const rabbit = new Rabbit(`amqp://${user}:${password}@${hostname}:${port}`)
    await rabbit.createQueue('default')

    const tasks = await Task.query().where('startAt', '>', 'NOW()')
    await Promise.all(tasks.map(async task => await rabbit.publish('default', task.id)))

    this.logger.success('All tasks published')
  }
}

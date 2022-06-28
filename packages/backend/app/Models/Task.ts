import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { QueueTaskStatus } from './../../common/enums/QueueTaskStatus'
import * as handlers from 'queue/index'
import CamelCaseNamingStrategy from './NamingStrategy/CamelCaseNamingStrategy'

export default class Task extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()

  @column({ isPrimary: true })
  public id!: number

  @column()
  public status!: QueueTaskStatus

  @column()
  public handler!: keyof typeof handlers

  @column({ prepare: v => JSON.stringify(v) })
  public params!: { [key: string]: any }

  @column()
  public info!: string

  @column()
  public error!: string

  @column.dateTime()
  public startAt!: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  public static async push (
    handler: keyof typeof handlers,
    params: Record<string, any> = {},
    startAt: DateTime = DateTime.now(),
  ): Promise<Task> {
    const task = new this()

    task.status = QueueTaskStatus.Pending
    task.handler = handler
    task.params = params
    task.info = ''
    task.error = ''
    task.startAt = startAt

    return await task.save()
  }
}

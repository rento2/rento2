import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { QueueTaskStatus } from 'common/enums/QueueTaskStatus'
import * as handlers from 'queue'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column()
  public status!: QueueTaskStatus

  @column()
  public handler!: keyof typeof handlers

  @column({ prepare: v => JSON.stringify(v) })
  public params!: { [key: string]: string }

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
}

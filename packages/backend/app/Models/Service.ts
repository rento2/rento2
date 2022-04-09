import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import Term from '../../common/enums/Term'

export default class Service extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column()
  public type!: Term

  @column()
  public name!: string

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime
}

import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import Term from '../../common/enums/Term'
import CamelCaseNamingStrategy from './NamingStrategy/CamelCaseNamingStrategy'

export default class Service extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()

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

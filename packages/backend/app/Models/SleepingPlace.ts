import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { SleepingPlaceType } from '../../common/enums/SleepingPlaceType'
import CamelCaseNamingStrategy from './NamingStrategy/CamelCaseNamingStrategy'

export default class SleepingPlace extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()

  @column({ isPrimary: true })
  public id!: number

  @column()
  public name!: string

  @column()
  public type!: SleepingPlaceType

  @column()
  public size!: number

  @column({ serializeAs: 'number' })
  public pivotNumber!: number

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime
}

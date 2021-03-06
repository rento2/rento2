import Apartment from 'App/Models/Apartment'
import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import CamelCaseNamingStrategy from './NamingStrategy/CamelCaseNamingStrategy'

export default class Photo extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()

  @column({ isPrimary: true })
  public id!: number

  @belongsTo(() => Apartment, {
    foreignKey: 'apartment_id',
  })
  public apartment!: BelongsTo<typeof Apartment>

  @column()
  public apartmentId!: number

  @column()
  public link!: string

  @column()
  public path!: string

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime
}

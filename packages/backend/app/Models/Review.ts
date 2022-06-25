import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Apartment from 'App/Models/Apartment'
import CamelCaseNamingStrategy from './NamingStrategy/CamelCaseNamingStrategy'

export default class Review extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()

  @column({ isPrimary: true })
  public id!: number

  @belongsTo(() => Apartment)
  public apartment!: BelongsTo<typeof Apartment>

  @column()
  public apartmentId!: number

  @column()
  public author!: string

  @column()
  public avatar!: string

  @column()
  public repairs!: number

  @column()
  public purity!: number

  @column()
  public location!: number

  @column()
  public priceQuality!: number

  @column()
  public comment!: string

  @column()
  public isApproved!: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime
}

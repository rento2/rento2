import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Pay from './../../common/enums/Pay'
import { DateTime } from 'luxon'
import { Apartment } from './'
import CamelCaseNamingStrategy from 'App/NamingStrategy'

export default class Order extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()

  @column({ isPrimary: true })
  public id!: number

  @column()
  public apartment_id!: number

  @column()
  public name!: string

  @column()
  public email!: string

  @column()
  public phone!: string

  @column()
  public date_from!: DateTime | Date

  @column()
  public date_to!: DateTime | Date

  @column()
  public fixed_price!: number

  @column()
  public fixed_total_price!: number

  @column()
  public nights_number!: number

  @column()
  public payment_type!: Pay

  @column()
  public prices!: string

  @column()
  public adults!: string

  @column()
  public children!: string

  @column()
  public babies!: string

  @column()
  public pets!: boolean

  @column()
  public paid_part!: number

  @column()
  public number!: string

  @column.dateTime({ autoCreate: true })
  public created_at!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at!: DateTime

  @column({ prepare: (value) => value ?? false })
  public is_deleted: boolean = false

  @belongsTo(() => Apartment, {
    localKey: 'id'
  })
  public apartments!: BelongsTo<typeof Apartment>
}

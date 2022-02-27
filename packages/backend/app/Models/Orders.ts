import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Pay from './../../common/enums/Pay'
import { DateTime } from 'luxon'
import { Apartment } from '.'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column()
  public apartmentId!: number

  @column()
  public name!: string

  @column()
  public email!: string

  @column()
  public phone!: string

  @column()
  public date_from!: Date

  @column()
  public date_to!: Date

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
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @column()
  public soft_delete!: boolean

  @belongsTo(() => Apartment, {
    localKey: 'id'
  })
  public apartments!: BelongsTo<typeof Apartment>
}

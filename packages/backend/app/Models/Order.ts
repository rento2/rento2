import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'
import { compose } from '@ioc:Adonis/Core/Helpers'
import Pay from './../../common/enums/Pay'
import { DateTime } from 'luxon'
import { Apartment } from './'
import CamelCaseNamingStrategy from './NamingStrategy/CamelCaseNamingStrategy'

export default class Order extends compose(BaseModel, SoftDeletes) {
  public static namingStrategy = new CamelCaseNamingStrategy()

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
  public dateFrom!: DateTime | Date

  @column()
  public dateTo!: DateTime | Date

  @column()
  public fixedPrice!: number

  @column()
  public fixedTotalPrice!: number

  @column()
  public nightsNumber!: number

  @column()
  public paymentType!: Pay

  @column({ prepare: v => JSON.stringify(v) })
  public prices!: Array<{ price: number, date: DateTime }>

  @column()
  public adults!: number

  @column()
  public children!: number

  @column()
  public babies!: number

  @column()
  public pets!: boolean

  @column()
  public paidPart!: number

  @column()
  public number!: string

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @column({ serializeAs: null })
  public deletedAt: DateTime|null = null

  @belongsTo(() => Apartment, {
    localKey: 'id'
  })
  public apartments!: BelongsTo<typeof Apartment>
}

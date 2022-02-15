import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Term from 'Contracts/enums/term'
import Accommodation from 'App/Models/Accommodation'

export default class Apartment extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column()
  public type!: Term

  @column()
  public isActive!: boolean

  @column()
  public name!: string

  @column()
  public latinName!: string

  @column()
  public description!: string

  @column()
  public bnovoId!: number

  @column()
  public novoId!: number

  @column()
  public price!: number

  @column()
  public pricePerMonth!: number

  @column()
  public discount!: number

  @column()
  public commission!: number

  @column()
  public utilityBills!: number

  @column()
  public securityDepositShort!: number

  @column()
  public securityDepositLong!: number

  @column()
  public roomsNum!: number

  @column()
  public storey!: number

  @column()
  public totalStoreys!: number

  @column()
  public area!: number

  @column()
  public kitchenArea: any

  @column()
  public distanceFromCenter!: number

  @column()
  public admArea!: string

  @column()
  public district!: string

  @column()
  public sellingPoint!: string

  @column()
  public geoCoordinateX!: string

  @column()
  public geoCoordinateY!: string

  @column()
  public subwayStation!: string

  @column()
  public timeToSubway!: number

  @column()
  public repairs!: number

  @column()
  public purity!: number

  @column()
  public location!: number

  @column()
  public priceQuality!: number

  @column()
  public totalRating!: number

  @column()
  checkInStart!: DateTime

  @column()
  checkInEnd!: DateTime

  @column()
  checkOutEnd!: DateTime

  @column()
  smokingAllowed!: boolean

  @column()
  partyingAllowed!: boolean

  @column()
  childrenAllowed!: boolean

  @column()
  petsAllowed!: boolean

  @column()
  maxAdults!: number

  @column()
  maxChildren!: number

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @manyToMany(() => Accommodation, {
    pivotTimestamps: true
  })
  public accommodations!: ManyToMany<typeof Accommodation>
}

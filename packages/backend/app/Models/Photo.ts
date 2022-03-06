import Apartment from 'App/Models/Apartment'
import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class Photo extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column()
  public apartment_id!: number

  @column()
  public link!: string

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime

  @belongsTo(() => Apartment, {
    localKey: 'apartment_id'
  })
  public aparmtment!: BelongsTo<typeof Apartment>
}

import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import MetroLine from './MetroLine'
import CamelCaseNamingStrategy from './NamingStrategy/CamelCaseNamingStrategy'

export default class MetroStation extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()

  @column({ isPrimary: true, serialize: (v) => Number(v) })
  public id!: number

  @column()
  public name!: string

  @column()
  public isCentral!: boolean

  @belongsTo(() => MetroLine)
  public metroLine!: BelongsTo<typeof MetroLine>

  @column()
  public metroLineId!: number

  @column()
  public lat!: number

  @column()
  public lon!: number

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime
}

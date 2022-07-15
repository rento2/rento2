import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ServicesToApartments extends BaseSchema {
  protected tableName = 'metro_stations_to_apartments'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigInteger('apartment_id').unsigned()
      table.foreign('apartment_id').references('apartments.id')
      table.bigInteger('metro_station_id').unsigned()
      table.foreign('metro_station_id').references('metro_stations.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.primary(['apartment_id', 'metro_station_id'])
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

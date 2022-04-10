import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SleepingPlacesToApartments extends BaseSchema {
  protected tableName = 'sleeping_places_to_apartments'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigInteger('apartment_id').unsigned()
      table.foreign('apartment_id').references('sleeping_place')
      table.bigInteger('sleeping_place_id').unsigned()
      table.foreign('sleeping_place_id').references('sleeping_place')

      table.integer('number').unsigned().defaultTo(1)

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.primary(['apartment_id', 'sleeping_place_id'])
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

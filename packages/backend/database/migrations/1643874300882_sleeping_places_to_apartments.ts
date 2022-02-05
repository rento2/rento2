import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SleepingPlacesToApartments extends BaseSchema {
  protected tableName = 'sleeping_places_to_apartments'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigInteger('apartment_id').unsigned()
      table.foreign('apartment_id').references('id').inTable('apartments')
      table.bigInteger('sleeping_places_id').unsigned()
      table.foreign('sleeping_places_id').references('id').inTable('sleeping_places')
      table.primary(['apartment_id', 'sleeping_places_id'])
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTable(this.tableName)
  }
}

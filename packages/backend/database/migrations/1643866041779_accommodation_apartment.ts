import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AccommodationApartment extends BaseSchema {
  protected tableName = 'accommodation_apartment'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.bigInteger('apartment_id').unsigned().references('apartments.id')
      table.bigInteger('accommodation_id').unsigned().references('accommodations.id')
      table.unique(['apartment_id', 'accommodation_id'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTable(this.tableName)
  }
}

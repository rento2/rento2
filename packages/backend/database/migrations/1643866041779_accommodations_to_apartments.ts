import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AccommodationsToApartments extends BaseSchema {
  protected tableName = 'accommodations_to_apartments'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigInteger('apartment_id').unsigned().references('apartments.id')
      table.bigInteger('accommodation_id').unsigned().references('accommodations.id')
      table.primary(['apartment_id', 'accommodation_id'])
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTable(this.tableName)
  }
}

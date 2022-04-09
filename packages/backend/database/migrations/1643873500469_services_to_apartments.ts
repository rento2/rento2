import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ServicesToApartments extends BaseSchema {
  protected tableName = 'services_to_apartments'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigInteger('apartment_id').unsigned()
      table.foreign('apartment_id').references('apartments.id')
      table.bigInteger('service_id').unsigned()
      table.foreign('service_id').references('services.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.primary(['apartment_id', 'service_id'])
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

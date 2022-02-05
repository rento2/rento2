import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ServicesToApartments extends BaseSchema {
  protected tableName = 'services_to_apartments'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigInteger('apartment_id').unsigned()
      table.foreign('apartment_id').references('id').inTable('apartments')
      table.bigInteger('service_id').unsigned()
      table.foreign('service_id').references('id').inTable('services')
      table.primary(['apartment_id', 'service_id'])
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTable(this.tableName)
  }
}

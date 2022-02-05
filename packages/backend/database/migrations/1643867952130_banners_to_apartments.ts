import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BannersToApartments extends BaseSchema {
  protected tableName = 'banners_to_apartments'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigInteger('apartment_id').unsigned()
      table.foreign('apartment_id').references('id').inTable('apartments')
      table.bigInteger('banner_id').unsigned()
      table.foreign('banner_id').references('id').inTable('banners')
      table.primary(['apartment_id', 'banner_id'])
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTable(this.tableName)
  }
}

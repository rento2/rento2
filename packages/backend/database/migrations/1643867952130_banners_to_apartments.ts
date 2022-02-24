import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BannersToApartments extends BaseSchema {
  protected tableName = 'banners_to_apartments'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigInteger('apartment_id').unsigned()
      table.foreign('apartment_id').references('apartments.id')
      table.bigInteger('banner_id').unsigned()
      table.foreign('banner_id').references('banners.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.primary(['apartment_id', 'banner_id'])
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

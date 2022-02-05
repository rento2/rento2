import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DiscountsToApartments extends BaseSchema {
  protected tableName = 'discounts_to_apartments'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigInteger('apartment_id').unsigned()
      table.foreign('apartment_id').references('id').inTable('apartments')
      table.bigInteger('discount_id').unsigned()
      table.foreign('discount_id').references('id').inTable('discounts')
      table.primary(['apartment_id', 'discount_id'])
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTable(this.tableName)
  }
}

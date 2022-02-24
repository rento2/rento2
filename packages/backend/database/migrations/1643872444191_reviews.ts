import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Reviews extends BaseSchema {
  protected tableName = 'reviews'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.bigInteger('apartment_id').unsigned()
      table.foreign('apartment_id').references('id').inTable('apartments')
      table.string('author', 255)
      table.string('address', 255)
      table.string('avatar', 255)
      table.decimal('repairs', 2, 1)
      table.decimal('purity', 2, 1)
      table.decimal('location', 2, 1)
      table.decimal('price_quality', 2, 1)
      table.decimal('total_rating', 2, 1)
      table.string('comment', 4096)
      table.boolean('is_approved')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

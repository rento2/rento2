import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Reviews extends BaseSchema {
  protected tableName = 'reviews'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.bigInteger('apartment_id').unsigned().nullable()
      table.foreign('apartment_id').references('id').inTable('apartments')
      table.string('author', 255).nullable()
      table.string('address', 255).nullable()
      table.string('avatar', 255).nullable()

      table.decimal('repairs', 2, 1).nullable()
      table.decimal('purity', 2, 1).nullable()
      table.decimal('location', 2, 1).nullable()
      table.decimal('price_quality', 2, 1).nullable()
      table.decimal('total_rating', 2, 1).nullable()

      table.string('comment', 4096).nullable()
      table.boolean('is_approved').nullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTable(this.tableName)
  }
}

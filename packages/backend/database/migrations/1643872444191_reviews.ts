import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Reviews extends BaseSchema {
  protected tableName = 'reviews'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.bigInteger('apartment_id').unsigned().notNullable()
      table.foreign('apartment_id').references('id').inTable('apartments')
      table.string('author', 255).notNullable()
      table.string('avatar', 255)
      table.decimal('repairs', 2, 1).notNullable()
      table.decimal('purity', 2, 1).notNullable()
      table.decimal('location', 2, 1).notNullable()
      table.decimal('price_quality', 2, 1).notNullable()
      table.text('comment').notNullable()
      table.boolean('is_approved').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

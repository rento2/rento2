import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').primary()
      table.bigInteger('apartment_id').unsigned().references('apartments')
      table.string('name', 255).notNullable()
      table.string('email', 255).notNullable()
      table.string('phone', 255).notNullable()
      table.dateTime('date_from').notNullable()
      table.dateTime('date_to').notNullable()
      table.decimal('fixed_price', 15, 2).notNullable()
      table.decimal('fixed_total_price', 15, 2).notNullable()
      table.integer('nights_number').notNullable()
      table.string('payment_type', 64).notNullable()
      table.string('prices', 5000).notNullable()
      table.string('adults', 5).notNullable()
      table.string('children', 5).notNullable()
      table.string('babies', 5).notNullable()
      table.boolean('pets').notNullable()
      table.decimal('paid_part', 15, 2).notNullable()
      table.string('number', 50).notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
      table.boolean('is_deleted').defaultTo(false).notNullable()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

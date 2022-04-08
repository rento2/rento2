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
      table.timestamp('date_from').notNullable()
      table.timestamp('date_to').notNullable()
      table.decimal('fixed_price', 15, 2).notNullable()
      table.decimal('fixed_total_price', 15, 2).notNullable()
      table.integer('nights_number', 3).notNullable()
      table.string('payment_type', 64).notNullable()
      table.jsonb('prices').defaultTo([]).notNullable()
      table.integer('adults').notNullable()
      table.integer('children', 5).notNullable()
      table.integer('babies', 5).notNullable()
      table.boolean('pets').notNullable()
      table.integer('paid_part', 3).notNullable()
      table.string('number', 50).notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
      table.timestamp('deleted_at').defaultTo(null).nullable().index()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

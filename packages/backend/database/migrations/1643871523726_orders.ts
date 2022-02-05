import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.bigInteger('apartment_id').unsigned().nullable()
      table.bigInteger('bnovo_id').nullable()
      table.string('name', 255).nullable()
      table.string('email', 255).nullable()
      table.string('phone', 255).nullable()
      table.dateTime('date_from').nullable()
      table.dateTime('date_to').nullable()
      table.decimal('price', 15, 2).nullable()
      table.decimal('total_price', 15, 2).nullable()
      table.integer('nights_number').nullable()
      table.enum('pay', ['full_prepayment', 'prepayment']).nullable()
      table.string('prices', 5000).nullable()
      table.string('adults', 5).nullable()
      table.string('children', 5).nullable()
      table.string('babies', 5).nullable()
      table.boolean('pets').nullable()
      table.decimal('paid_part', 15, 2).nullable()
      table.string('number', 50).nullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTable(this.tableName)
  }
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').primary()
      table.bigInteger('apartment_id').unsigned()
      table.bigInteger('bnovo_id')
      table.string('name', 255)
      table.string('email', 255)
      table.string('phone', 255)
      table.timestamp('date_from')
      table.timestamp('date_to')
      table.decimal('price', 15, 2)
      table.decimal('total_price', 15, 2)
      table.integer('nights_number')
      table.enum('pay', ['full_prepayment', 'prepayment'])
      table.string('prices', 5000)
      table.string('adults', 5)
      table.string('children', 5)
      table.string('babies', 5)
      table.boolean('pets')
      table.decimal('paid_part', 15, 2)
      table.string('number', 50)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

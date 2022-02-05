import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SleepingPlaces extends BaseSchema {
  protected tableName = 'sleeping_places'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.string('name', 255).nullable()
      table.enum('type', ['bed', 'sofa']).nullable()
      table.integer('size').nullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTable(this.tableName)
  }
}

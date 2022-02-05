import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Accommodations extends BaseSchema {
  protected tableName = 'accommodations'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.enum('type', ['short', 'long', 'all']).nullable()
      table.string('name', 255)
      table.string('name_eg', 255)
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

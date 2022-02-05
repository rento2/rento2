import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Leads extends BaseSchema {
  protected tableName = 'leads'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.string('name', 50).nullable()
      table.string('phone', 255).nullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTable(this.tableName)
  }
}

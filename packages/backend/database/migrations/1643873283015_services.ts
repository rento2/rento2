import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Services extends BaseSchema {
  protected tableName = 'services'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.enum('type', ['short', 'long', 'all']).nullable()
      table.string('name', 255)
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTable(this.tableName)
  }
}

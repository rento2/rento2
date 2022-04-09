import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Leads extends BaseSchema {
  protected tableName = 'leads'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').primary()
      table.string('name', 50)
      table.string('phone', 255)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

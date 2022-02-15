import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Accommodations extends BaseSchema {
  protected tableName = 'accommodations'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.string('name', 255).unique()
      table.string('name_en', 255).unique()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

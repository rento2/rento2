import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Banners extends BaseSchema {
  protected tableName = 'banners'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.string('name', 255)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

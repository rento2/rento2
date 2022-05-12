import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Photos extends BaseSchema {
  protected tableName = 'photos'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').primary()
      table.bigInteger('apartment_id').unsigned().references('apartments')
      table.string('link', 512)
      table.string('path', 512)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

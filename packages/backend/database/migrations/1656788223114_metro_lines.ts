import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MetroLines extends BaseSchema {
  protected tableName = 'metro_lines'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').primary()
      table.string('name', 255).notNullable()
      table.string('color', 16).notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

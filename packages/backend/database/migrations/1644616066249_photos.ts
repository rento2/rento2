import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Photos extends BaseSchema {
  protected tableName = 'photos'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('apartment_id').unsigned()
      table.foreign('apartment_id') //  TODO  .references("id").inTable("apartments")
      table.string('link', 255)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTable(this.tableName)
  }
}
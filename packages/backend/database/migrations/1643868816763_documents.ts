import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Documents extends BaseSchema {
  protected tableName = 'documents'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.bigInteger('apartment_id').unsigned()
      table.string('name', 255)
      table.string('text', 4096)
      table.enum('rent_type', ['short', 'long'])
      table.enum('doc_type', ['rules', 'offer'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

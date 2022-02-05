import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Documents extends BaseSchema {
  protected tableName = 'documents'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.bigInteger('apartment_id').unsigned().nullable()
      table.string('name', 255).nullable()
      table.string('text', 4096).nullable()
      table.enum('rent_type', ['short', 'long']).nullable()
      table.enum('doc_type', ['rules', 'offer']).nullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTable(this.tableName)
  }
}

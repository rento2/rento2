import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DocumentsToApartments extends BaseSchema {
  protected tableName = 'documents_to_apartments'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigInteger('apartment_id').unsigned()
      table.foreign('apartment_id').references('apartments.id')
      table.bigInteger('documents_id').unsigned()
      table.foreign('documents_id').references('documents.id')

      table.primary(['apartment_id', 'documents_id'])
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SleepingPlaces extends BaseSchema {
  protected tableName = 'sleeping_places'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').primary()
      table.string('name', 255)
      table.string('type', 32)
      table.integer('size')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

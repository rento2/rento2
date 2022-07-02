import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MetroStations extends BaseSchema {
  protected tableName = 'metro_stations'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').primary()
      table.string('name', 255).notNullable()
      table.boolean('is_central').notNullable()
      table.bigInteger('metro_line_id').unsigned().notNullable()
      table.foreign('metro_line_id').references('metro_lines.id')

      table.decimal('lat', 10, 6).notNullable()
      table.decimal('lon', 10, 6).notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

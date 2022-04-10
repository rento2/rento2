import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').primary()
      table.string('email', 255).notNullable().index()
      table.string('password', 512).notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTableIfExists(this.tableName)
  }
}

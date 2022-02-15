import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Term from 'Contracts/enums/term'

export default class Apartments extends BaseSchema {
  protected tableName = 'apartments'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.enum('type', [Term.SHORT, Term.LONG, Term.ALL])
      table.boolean('is_active')
      table.string('name', 255).unique()
      table.string('latin_name', 255)
      table.string('description', 1024).nullable()
      table.bigInteger('bnovo_id').unique()
      table.decimal('price', 7, 2).nullable()
      table.bigInteger('price_per_month').nullable()
      table.decimal('discount', 5, 2).nullable()
      table.decimal('commission', 11, 2).nullable()
      table.decimal('utility_bills', 7, 2).nullable()
      table.decimal('security_deposit_short', 7, 2)
      table.decimal('security_deposit_long', 8, 2)
      table.integer('rooms_num').defaultTo(1)
      table.integer('storey').nullable()
      table.integer('total_storeys').nullable()
      table.decimal('area', 7, 2).nullable()
      table.decimal('kitchen_area', 7, 2).nullable()
      table.integer('distance_from_center').nullable()
      table.string('adm_area', 255).defaultTo('')
      table.string('district', 255).defaultTo('')

      table.string('selling_point', 1023).defaultTo('')
      table.string('geo_coordinate_x', 20).defaultTo('')
      table.string('geo_coordinate_y', 20).defaultTo('')
      table.string('subway_station', 225).defaultTo('')
      table.integer('time_to_subway').nullable()

      table.decimal('repairs', 2, 1).nullable()
      table.decimal('purity', 2, 1).nullable()
      table.decimal('location', 2, 1).nullable()
      table.decimal('price_quality', 2, 1).nullable()
      table.decimal('total_rating', 2, 1).nullable()

      table.time('check_in_start').nullable()
      table.time('check_in_end').nullable()
      table.time('check_out_end').nullable()
      table.boolean('smoking_allowed').defaultTo('false')
      table.boolean('partying_allowed').defaultTo('false')
      table.boolean('children_allowed').defaultTo('false')
      table.boolean('pets_allowed').defaultTo('false')
      table.integer('max_adults').defaultTo(0)
      table.integer('max_children').defaultTo(0)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down (): Promise<void> {
    void this.schema.dropTable(this.tableName)
  }
}

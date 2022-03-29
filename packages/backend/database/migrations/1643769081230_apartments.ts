import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Term from '../../common/enums/Term'
import { createArrFromEnum } from '../../common/helpers/enumService'

export default class Apartments extends BaseSchema {
  protected tableName = 'apartments'

  public async up (): Promise<void> {
    void this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.enum('type', createArrFromEnum(Term))
      table.boolean('is_active')
      table.string('name', 255).unique()
      table.string('latin_name', 255)
      table.string('description', 1024)
      table.bigInteger('bnovo_id').unique()
      table.decimal('price', 7, 2)
      table.bigInteger('price_per_month')
      table.decimal('discount', 5, 2)
      table.decimal('commission', 11, 2)
      table.decimal('utility_bills', 7, 2)
      table.decimal('security_deposit_short', 7, 2)
      table.decimal('security_deposit_long', 8, 2)
      table.integer('rooms_num').defaultTo(1)
      table.integer('storey')
      table.integer('total_storeys')
      table.decimal('area', 7, 2)
      table.decimal('kitchen_area', 7, 2)
      table.integer('distance_from_center')
      table.string('adm_area', 64).index()
      table.string('district', 255).defaultTo('')
      table.string('selling_point', 1023)
      table.string('geo_coordinate_x', 20)
      table.string('geo_coordinate_y', 20)
      table.string('subway_station', 225)
      table.integer('time_to_subway')

      table.decimal('repairs', 2, 1)
      table.decimal('purity', 2, 1)
      table.decimal('location', 2, 1)
      table.decimal('price_quality', 2, 1)
      table.decimal('total_rating', 2, 1)

      table.timestamp('check_in_start')
      table.timestamp('check_in_end')
      table.timestamp('check_out_end')
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
    void this.schema.dropTableIfExists(this.tableName)
  }
}

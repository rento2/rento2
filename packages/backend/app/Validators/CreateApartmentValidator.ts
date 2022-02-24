import { rules, schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Term from 'Contracts/enums/term'
import ValidatorMessages from 'App/Validators/ValidatorMessages'

export default class CreateApartmentValidator extends ValidatorMessages {
  constructor (protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    type: schema.enum(Object.values(Term)),
    is_active: schema.boolean(),
    name: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255),
      rules.unique({ table: 'apartments', column: 'name' }),
      rules.regex(/^[a-zA-Z0-9-_. ]+$/)
    ]),
    latin_name: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255),
      rules.unique({ table: 'apartments', column: 'latin_name' }),
      rules.regex(/^[a-zA-Z0-9-_. ]+$/)
    ]),
    description: schema.string({ trim: true }, [
      rules.minLength(15),
      rules.maxLength(1024)
    ]),
    bnovo_id: schema.number([
      rules.unique({ table: 'apartments', column: 'bnovo_id' }),
      rules.unsigned()
    ]),
    price: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999.99)
    ]),
    price_per_month: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999)
    ]),
    discount: schema.number([
      rules.unsigned(),
      rules.range(0, 99999.99)
    ]),
    commission: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999.99)
    ]),
    utility_bills: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999.99)
    ]),
    security_deposit_short: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999.99)
    ]),
    security_deposit_long: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999.99)
    ]),
    rooms_num: schema.number([
      rules.unsigned(),
      rules.range(1, 200)
    ]),

    storey: schema.number([
      rules.unsigned(),
      rules.range(0, 300)
    ]),
    total_storeys: schema.number([
      rules.unsigned(),
      rules.range(1, 300)
    ]),

    area: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999.99)
    ]),
    kitchen_area: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999.99)
    ]),
    distance_from_center: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999.99)
    ]),
    adm_area: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255)
    ]),
    district: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255)
    ]),
    selling_point: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(1023)
    ]),
    geo_coordinate_x: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(20)
    ]),
    geo_coordinate_y: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(20)
    ]),
    subway_station: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255)
    ]),
    time_to_subway: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999.99)
    ]),

    repairs: schema.number([
      rules.unsigned(),
      rules.range(0, 99.9)
    ]),
    purity: schema.number([
      rules.unsigned(),
      rules.range(0, 99.9)
    ]),
    location: schema.number([
      rules.unsigned(),
      rules.range(0, 99.9)
    ]),
    price_quality: schema.number([
      rules.unsigned(),
      rules.range(0, 99.9)
    ]),
    total_rating: schema.number([
      rules.unsigned(),
      rules.range(0, 99.9)
    ]),

    check_in_start: schema.date({
      format: 'yyyy-MM-dd HH:mm:ss'
    }
      // [ rules.after('today')]
    ),
    check_in_end: schema.date({
      format: 'yyyy-MM-dd HH:mm:ss'
    }),
    check_out_end: schema.date({
      format: 'yyyy-MM-dd HH:mm:ss'
    }),

    smoking_allowed: schema.boolean(),
    partying_allowed: schema.boolean(),
    children_allowed: schema.boolean(),
    pets_allowed: schema.boolean(),

    max_adults: schema.number([
      rules.unsigned(),
      rules.range(0, 99)
    ]),
    max_children: schema.number([
      rules.unsigned(),
      rules.range(0, 99)
    ])
  })
}
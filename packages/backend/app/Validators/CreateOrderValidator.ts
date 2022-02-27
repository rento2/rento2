import { rules, schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidatorMessages from 'App/Validators/ValidatorMessages'
import Pay from '../../common/enums/Pay'

export default class CreateOrderValidator extends ValidatorMessages {
  constructor (protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    apartment_id: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999.99)
    ]),
    name: schema.string({ trim: true }, [
    ]),
    email: schema.string({ trim: true }, [
      rules.email()
    ]),
    // phone: schema.string({ trim: true }, [
    //   rules.mobile({ strict: true, locales: ['ru-RU'] })
    // ]),
    date_from: schema.date({
      format: 'yyyy-MM-dd HH:mm:ss'
    }),
    date_to: schema.date({
      format: 'yyyy-MM-dd HH:mm:ss'
    }),
    nights_number: schema.number([
      rules.unsigned(),
      rules.range(0, 1000)
    ]),
    payment_type: schema.enum(Object.values(Pay)),
    prices: schema.string({ trim: true }, [
      rules.minLength(1),
      rules.maxLength(5000)
    ]),
    adults: schema.number([
      rules.unsigned(),
      rules.range(0, 99)
    ]),
    children: schema.number([
      rules.unsigned(),
      rules.range(0, 99)
    ]),
    babies: schema.number([
      rules.unsigned(),
      rules.range(0, 99)
    ]),
    pets: schema.boolean(),
    paid_part: schema.number([
      rules.unsigned(),
      rules.range(0, 100)
    ]),
    number: schema.string({ trim: true }, [
      rules.minLength(1),
      rules.maxLength(255)
    ])
  })
}

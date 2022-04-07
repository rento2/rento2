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
      rules.exists({ table: 'apartments', column: 'id' }),
    ]),
    name: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255),
    ]),
    email: schema.string({ trim: true }, [
      rules.email(),
    ]),
    phone: schema.string({ trim: true }, [
      rules.mobile({ strict: true })
    ]),
    date_from: schema.date({
      format: 'yyyy-MM-dd HH:mm:ss'
    }),
    date_to: schema.date({
      format: 'yyyy-MM-dd HH:mm:ss'
    }),
    nights_number: schema.number([
      rules.unsigned(),
      rules.range(0, 365)
    ]),
    payment_type: schema.enum(Object.values(Pay) as Pay[]),
    prices: schema.string({ trim: true }, [
      rules.minLength(1),
      rules.maxLength(5000)
    ]),
    adults: schema.number([
      rules.unsigned(),
    ]),
    children: schema.number([
      rules.unsigned(),
    ]),
    babies: schema.number([
      rules.unsigned(),
    ]),
    pets: schema.boolean(),
    paid_part: schema.number([
      rules.unsigned(),
    ]),
    number: schema.string({ trim: true }, [
      rules.range(1, 255),
    ]),
  })
}

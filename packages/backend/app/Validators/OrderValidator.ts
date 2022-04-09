import { rules, schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidatorMessages from 'App/Validators/ValidatorMessages'
import Pay from '../../common/enums/Pay'

export default class OrderValidator extends ValidatorMessages {
  constructor (protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    apartmentId: schema.number([
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
    dateFrom: schema.date(),
    dateTo: schema.date(),
    nightsNumber: schema.number([
      rules.unsigned(),
      rules.range(0, 365)
    ]),
    paymentType: schema.enum(Object.values(Pay) as Pay[]),
    prices: schema.array().members(
      schema.object()
        .members({
          date: schema.date(undefined, [
            rules.required()
          ]),
          price: schema.number([
            rules.required()
          ])
        })
    ),
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
    paidPart: schema.number([
      rules.range(0, 100),
    ]),
    number: schema.string({ trim: true }, [
      rules.range(1, 255),
    ]),
  })
}

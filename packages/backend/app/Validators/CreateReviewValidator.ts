import { rules, schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidatorMessages from 'App/Validators/ValidatorMessages'

export default class CreateReviewValidator extends ValidatorMessages {
  constructor (protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    apartmentId: schema.number([
      rules.exists({ table: 'apartments', column: 'id' })
    ]),

    author: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255),
      rules.regex(/^[А-ЯЁ][а-яё]*$/)
    ]),

    avatar: schema.string({ trim: true }, [
      rules.url(),
      rules.maxLength(255),
    ]),

    repairs: schema.number([
      rules.unsigned(),
      rules.range(0, 5),
    ]),

    purity: schema.number([
      rules.unsigned(),
      rules.range(0, 5),
    ]),

    location: schema.number([
      rules.unsigned(),
      rules.range(0, 5),
    ]),

    priceQuality: schema.number([
      rules.unsigned(),
      rules.range(0, 5),
    ]),

    comment: schema.string({}, [
      rules.minLength(10),
      rules.maxLength(4000),
    ]),
  })
}

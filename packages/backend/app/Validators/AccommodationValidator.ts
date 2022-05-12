import { schema, rules } from '@ioc:Adonis/Core/Validator'
import ValidatorMessages from 'App/Validators/ValidatorMessages'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AccommodationValidator extends ValidatorMessages {
  constructor (protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    id: schema.number([rules.unsigned()]),
    name: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255)
    ]),
    name_en: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255)
    ])
  })
}

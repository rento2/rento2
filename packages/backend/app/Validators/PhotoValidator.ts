import { rules, schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PhotoValidator {
  constructor (protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id: schema.number([rules.unsigned()]),

    apartment_id: schema.number([
      rules.exists({ table: 'apartments', column: 'id' }),
    ]),

    link: schema.file(),
  })

  public messages = {}
}

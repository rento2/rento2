import { rules, schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidatorMessages from 'App/Validators/ValidatorMessages'

export default class MetroStationValidator extends ValidatorMessages {
  constructor (protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    metroLineId: schema.number([
      rules.unsigned(),
      rules.exists({ table: 'metro_lines', column: 'id' }),
    ]),
    name: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255),
    ]),
    isCentral: schema.boolean(),
    lat: schema.number(),
    lon: schema.number(),
  })
}

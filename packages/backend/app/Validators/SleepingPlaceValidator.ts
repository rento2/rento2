import { rules, schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidatorMessages from 'App/Validators/ValidatorMessages'
import { SleepingPlaceType } from '../../common/enums/SleepingPlaceType'

export default class SleepingPlaceValidator extends ValidatorMessages {
  constructor (protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255),
    ]),

    type: schema.enum(
      Object.values(SleepingPlaceType) as SleepingPlaceType[],
      [rules.required()]
    ),

    size: schema.number([
      rules.unsigned(),
      rules.range(1, 100),
    ]),
  })
}

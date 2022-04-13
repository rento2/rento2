import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidatorMessages from 'App/Validators/ValidatorMessages'

export default class PhotoValidator extends ValidatorMessages {
  constructor (protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    apartmentId: schema.number([
      rules.exists({ table: 'apartments', column: 'id' })
    ]),

    image: schema.file({
      size: '5mb',
      extnames: ['webp', 'jpg', 'jpeg', 'gif', 'png'],
    }),
  })
}

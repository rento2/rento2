import { rules, schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class PhotoValidator {
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

export const photoSchema = schema.create({
  image: schema.file({
    size: '2mb',
    extnames: ['webp', 'jpg', 'jpeg', 'gif', 'png', 'svg'],
  }),
})

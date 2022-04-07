import { schema } from '@ioc:Adonis/Core/Validator'

export const photoSchema = schema.create({
  image: schema.file({
    size: '2mb',
    extnames: ['webp', 'jpg', 'jpeg', 'gif', 'png', 'svg'],
  }),
})

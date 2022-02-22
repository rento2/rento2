import Photo from 'App/Models/Photo'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const PhotoFactory = Factory.define(Photo, ({ faker }) => {
  return {
    id: faker.datatype.number(),
    apartment_id: faker.datatype.number(),
    link: faker.internet.url()
  }
}).build()

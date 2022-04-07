import Photo from 'App/Models/Photo'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { ApartmentsFactory } from './ApartmentsFactory'

export const PhotoFactory = Factory.define(Photo, ({ faker }) => {
  return {
    id: faker.datatype.number(),
    link: faker.internet.url(),
  }
})
  .relation('apartment', () => ApartmentsFactory)
  .build()

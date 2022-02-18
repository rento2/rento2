import Photo from 'App/Models/Photo'
import Factory from '@ioc:Adonis/Lucid/Factory'

export interface IPhotoFactory {
  id: number
  apartment_id: number
  link: string
  created_at?: Date
  updated_at?: Date
}

export const PhotoFactory = Factory.define(
  Photo,
  ({ faker }): IPhotoFactory => {
    return {
      id: faker.datatype.number(),
      apartment_id: faker.datatype.number(),
      link: faker.internet.url()
    }
  }
).build()

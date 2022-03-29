import Factory from '@ioc:Adonis/Lucid/Factory'
import Review from 'App/Models/Review'
import { ApartmentsFactory } from './ApartmentsFactory'

export const ReviewsFactory = Factory
  .define(Review, ({ faker }) => {
    return {
      author: faker.internet.userName(),
      address: faker.address.streetName(),
      avatar: faker.internet.avatar(),
      repairs: faker.datatype.number(10),
      purity: faker.datatype.number(10),
      location: faker.datatype.number(10),
      priceQuality: faker.datatype.number(10),
      comment: faker.lorem.sentence(),
      isApproved: faker.datatype.boolean()
    }
  })
  .relation('apartment', () => ApartmentsFactory)
  .build()

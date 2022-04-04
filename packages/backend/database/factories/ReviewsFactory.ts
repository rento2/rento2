import Factory from '@ioc:Adonis/Lucid/Factory'
import Review from 'App/Models/Review'
import { ApartmentsFactory } from './ApartmentsFactory'

export const ReviewsFactory = Factory
  .define(Review, ({ faker }) => {
    return {
      author: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      repairs: faker.datatype.number(5),
      purity: faker.datatype.number(5),
      location: faker.datatype.number(5),
      priceQuality: faker.datatype.number(5),
      comment: faker.lorem.sentence(),
      isApproved: faker.datatype.boolean()
    }
  })
  .relation('apartment', () => ApartmentsFactory)
  .build()

import Factory from '@ioc:Adonis/Lucid/Factory'
import Banner from 'App/Models/Banner'

export const BannersFactory = Factory
  .define(Banner, ({ faker }) => {
    return {
      name: faker.lorem.sentence(),
    }
  })
  .build()

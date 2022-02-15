import Factory from '@ioc:Adonis/Lucid/Factory'
import Accommodation from 'App/Models/Accommodation'

export const AccommodationsFactory = Factory
  .define(Accommodation, ({ faker }) => {
    return {
      name: faker.name.firstName(),
      nameEn: faker.internet.userName()
    }
  })
  .build()

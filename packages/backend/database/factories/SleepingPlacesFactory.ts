import Factory from '@ioc:Adonis/Lucid/Factory'
import SleepingPlace from 'App/Models/SleepingPlace'
import SleepingPlaceType from '../../common/enums/SleepingPlaceType'

export const SleepingPlacesFactory = Factory
  .define(SleepingPlace, ({ faker }) => {
    return {
      name: faker.lorem.sentence(),
      type: faker.helpers.arrayElement(Object.values(SleepingPlaceType)),
      size: faker.datatype.number(3),
    }
  })
  .build()

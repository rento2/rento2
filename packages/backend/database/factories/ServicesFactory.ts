import Factory from '@ioc:Adonis/Lucid/Factory'
import Service from 'App/Models/Service'
import Term from '../../common/enums/Term'

export const ServicesFactory = Factory
  .define(Service, ({ faker }) => {
    return {
      type: faker.random.arrayElement(Object.values(Term)) as Term,
      name: faker.lorem.sentence(),
    }
  })
  .build()

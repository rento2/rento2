import Factory from '@ioc:Adonis/Lucid/Factory'
import MetroLine from 'App/Models/MetroLine'

export const MetroLinesFactory = Factory
  .define(MetroLine, ({ faker }) => ({
    color: faker.internet.color(),
    name: faker.address.streetName(),
  }))
  .build()

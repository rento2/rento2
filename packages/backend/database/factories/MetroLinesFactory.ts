import Factory from '@ioc:Adonis/Lucid/Factory'
import MetroLine from 'App/Models/MetroLine'

export const MetroLinesFactory = Factory
  .define(MetroLine, ({ faker }) => {
    return {
      color: faker.internet.color(),
      name: faker.lorem.words(2),
    }
  })
  .build()

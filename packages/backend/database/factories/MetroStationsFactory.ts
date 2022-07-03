import Factory from '@ioc:Adonis/Lucid/Factory'
import MetroStation from 'App/Models/MetroStation'
import { MetroLinesFactory } from './MetroLinesFactory'

export const MetroStationsFactory = Factory
  .define(MetroStation, async ({ faker }) => {
    const metroLineInstance = await MetroLinesFactory.make()
    const { id: metroLineId } = await metroLineInstance.save()

    return {
      metroLineId,
      isCentral: faker.datatype.boolean(),
      name: faker.address.streetName(),
      lat: faker.datatype.float({
        min: 0,
        max: 90,
        precision: 4,
      }),
      lon: faker.datatype.float({
        min: 0,
        max: 90,
        precision: 4,
      }),
    }
  })
  .build()

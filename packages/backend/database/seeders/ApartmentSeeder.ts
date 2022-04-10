import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ApartmentsFactory } from 'Database/factories/ApartmentsFactory'
import { AccommodationsFactory } from 'Database/factories/AccommodationsFactory'

export default class ApartmentSeeder extends BaseSeeder {
  public async run (): Promise<void> {
    await ApartmentsFactory.createMany(4)
    await AccommodationsFactory.createMany(4)
  }
}

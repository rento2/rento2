import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ApartmentsFactory } from 'Database/factories/ApartmentsFactory'

export default class ApartmentSeeder extends BaseSeeder {
  public async run (): Promise<void> {
    await ApartmentsFactory
      .with('accommodations', 5)
      .with('services', 3)
      .with('banners', 3)
      .with('orders', 5)
      .with('sleepingPlaces', 2)
      .with('photos', 4)
      .createMany(4)
  }
}

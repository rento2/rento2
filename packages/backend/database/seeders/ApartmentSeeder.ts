import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ApartmentsFactory } from 'Database/factories/ApartmentsFactory'

export default class ApartmentSeeder extends BaseSeeder {
  public async run (): Promise<void> {
    await ApartmentsFactory.with('accommodations', 5).with('banners', 3).createMany(4)
  }
}

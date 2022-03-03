import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ApartmentsFactory } from 'Database/factories/ApartmentsFactory'

export default class ApartmentSeeder extends BaseSeeder {
  public async run (): Promise<void> {
    await ApartmentsFactory.with('accommodations', 5).createMany(2)
    await ApartmentsFactory.with('orders', 1).createMany(5)
  }
}

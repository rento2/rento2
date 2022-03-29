import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ReviewsFactory } from 'Database/factories/ReviewsFactory'

export default class ApartmentSeeder extends BaseSeeder {
  public async run (): Promise<void> {
    await ReviewsFactory.with('apartment').createMany(20)
  }
}

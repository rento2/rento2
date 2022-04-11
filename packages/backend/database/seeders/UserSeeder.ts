import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { UsersFactory } from 'Database/factories/UsersFactory'

export default class ApartmentSeeder extends BaseSeeder {
  public async run (): Promise<void> {
    await UsersFactory.createMany(5)
  }
}

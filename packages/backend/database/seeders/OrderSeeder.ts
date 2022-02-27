import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { OrdersFactory } from 'Database/factories/OrdersFactory'

export default class OrderSeeder extends BaseSeeder {
  public async run (): Promise<void> {
    await OrdersFactory.createMany(2)
  }
}

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import { UsersFactory } from 'Database/factories/UsersFactory'

export default class UserSeeder extends BaseSeeder {
  public async run (): Promise<void> {
    const existingOne = await User.findBy('email', 'admin@rento2.ru')
    if (existingOne) {
      await existingOne.delete()
    }

    const user = new User()
    user.email = 'admin@rento2.ru'
    user.password = '123'
    await user.save()

    await UsersFactory.createMany(5)
  }
}

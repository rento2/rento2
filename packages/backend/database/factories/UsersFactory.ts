import Factory from '@ioc:Adonis/Lucid/Factory'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'

export const UsersFactory = Factory
  .define(User, async ({ faker }) => {
    return {
      email: faker.internet.email(),
      password: await Hash.make('123')
    }
  })
  .build()

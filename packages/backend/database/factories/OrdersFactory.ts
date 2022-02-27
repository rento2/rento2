import Factory from '@ioc:Adonis/Lucid/Factory'
import Order from 'App/Models/Orders'
import { returnRandomFromEnum } from '../../common/helpers/enumService'
import Pay from '../../common/enums/Pay'

export const OrdersFactory = Factory
  .define(Order, ({ faker }) => {
    return {
      apartment_id: Math.random() * 10,
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      date_from: faker.datatype.datetime(),
      date_to: faker.datatype.datetime(),
      fixed_price: Math.random() * (200 - 100) + 100,
      fixed_total_price: Math.random() * (200 - 100) + 100,
      nights_number: Math.random() * (200 - 100) + 100,
      payment_type: returnRandomFromEnum(Pay),
      prices: faker.random.alphaNumeric(),
      adults: faker.lorem.word(5),
      children: faker.lorem.word(5),
      babies: faker.lorem.word(5),
      pets: faker.datatype.boolean(),
      paid_part: Math.random() * (200 - 100) + 100,
      number: faker.random.alphaNumeric(),
      soft_delete: faker.datatype.boolean()
    }
  })
  .build()

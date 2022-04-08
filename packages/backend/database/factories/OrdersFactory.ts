import Factory from '@ioc:Adonis/Lucid/Factory'
import Order from 'App/Models/Order'
import { returnRandomFromEnum } from '../../common/helpers/enumService'
import Pay from '../../common/enums/Pay'

export const OrdersFactory = Factory
  .define(Order, ({ faker }) => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    dateFrom: faker.datatype.datetime(),
    dateTo: faker.datatype.datetime(),
    fixedPrice: faker.datatype.number(50_000),
    fixedTotalPrice: faker.datatype.number(100_000),
    nightsNumber: faker.datatype.number(365),
    paymentType: returnRandomFromEnum(Pay),
    prices: Array(5).fill(faker.datatype.number(50_000)),
    adults: faker.datatype.number(10),
    children: faker.datatype.number(10),
    babies: faker.datatype.number(10),
    pets: faker.datatype.boolean(),
    paidPart: faker.datatype.number(100),
    number: faker.random.alphaNumeric(),
  }))
  .build()

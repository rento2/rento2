import Factory from '@ioc:Adonis/Lucid/Factory'
import Apartment from 'App/Models/Apartment'
import Term from '../../common/enums/Term'
import { returnRandomFromEnum } from '../../common/helpers/enumService'
import { AdminDistrictsOfMoscow } from '../../common/enums/AdminDistrictsOfMoscow'

export const ApartmentsFactory = Factory
  .define(Apartment, ({ faker }) => {
    return {
      type: returnRandomFromEnum(Term),
      isActive: faker.datatype.boolean(),
      name: faker.internet.userName(),
      latinName: faker.name.findName(),
      description: faker.lorem.text(Math.round(Math.random() * (20 - 5) + 5)),
      bnovoId: Math.floor(Math.random() * (20000 - 10) + 10),
      price: Math.random() * (200 - 100) + 100,
      pricePerMonth: Math.random() * (200 - 100) + 100,
      discount: Math.random() * (200 - 100) + 100,
      commission: Math.random() * (200 - 100) + 100,
      utilityBills: Math.random() * (200 - 100) + 100,
      securityDepositShort: Math.random() * (200 - 100) + 100,
      securityDepositLong: Math.random() * (200 - 100) + 100,
      roomsNum: Math.random() * (200 - 100) + 100,
      storey: Math.random() * (200 - 100) + 100,
      totalStoreys: Math.random() * (200 - 100) + 100,
      area: Math.random() * (200 - 100) + 100,
      kitchenArea: Math.random() * (200 - 100) + 100,
      distanceFromCenter: Math.random() * (200 - 100) + 100,
      admArea: returnRandomFromEnum(AdminDistrictsOfMoscow),
      district: faker.lorem.words(5),
      sellingPoint: faker.lorem.words(5),
      geoCoordinateX: faker.lorem.word(7),
      geoCoordinateY: faker.lorem.word(7),
      subwayStation: faker.lorem.words(4),
      timeToSubway: Math.random() * (200 - 100) + 100,

      repairs: +((Math.random() * (9 - 1) + 1).toFixed(1)),
      purity: +((Math.random() * (9 - 1) + 1).toFixed(1)),
      location: +((Math.random() * (9 - 1) + 1).toFixed(1)),
      price_quality: +((Math.random() * (9 - 1) + 1).toFixed(1)),
      total_rating: +((Math.random() * (9 - 1) + 1).toFixed(1)),

      check_in_start: faker.datatype.datetime(),
      check_in_end: faker.datatype.datetime(),
      check_out_end: faker.datatype.datetime(),

      smoking_allowed: faker.datatype.boolean(),
      partying_allowed: faker.datatype.boolean(),
      children_allowed: faker.datatype.boolean(),
      pets_allowed: faker.datatype.boolean(),

      max_adults: Math.random() * (6 - 1) + 1,
      max_children: Math.random() * (6 - 1) + 1
    }
  })
  .build()

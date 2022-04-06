import Factory from '@ioc:Adonis/Lucid/Factory'
import Apartment from 'App/Models/Apartment'
import { AccommodationsFactory } from 'Database/factories/AccommodationsFactory'
import Term from '../../common/enums/Term'
import { returnRandomFromEnum } from '../../common/helpers/enumService'
import { AdminDistrictsOfMoscow } from '../../common/enums/AdminDistrictsOfMoscow'
import { ServicesFactory } from './ServicesFactory'
import { BannersFactory } from './BannersFactory'

export const ApartmentsFactory = Factory
  .define(Apartment, ({ faker }) => {
    return {
      type: returnRandomFromEnum(Term),
      isActive: faker.datatype.boolean(),
      name: faker.internet.userName(),
      latinName: faker.name.findName(),
      description: faker.lorem.text(Math.round(Math.random() * (20 - 5) + 5)),
      bnovoId: Math.floor(Math.random() * (20000 - 10) + 10),
      price: Math.floor(Math.random() * (200 - 100) + 100),
      pricePerMonth: Math.floor(Math.random() * (200 - 100) + 100),
      discount: Math.floor(Math.random() * (200 - 100) + 100),
      commission: Math.floor(Math.random() * (200 - 100) + 100),
      utilityBills: Math.floor(Math.random() * (200 - 100) + 100),
      securityDepositShort: Math.floor(Math.random() * (200 - 100) + 100),
      securityDepositLong: Math.floor(Math.random() * (200 - 100) + 100),
      roomsNum: Math.floor(Math.random() * (200 - 100) + 100),
      storey: Math.floor(Math.random() * (200 - 100) + 100),
      totalStoreys: Math.floor(Math.random() * (200 - 100) + 100),
      area: Math.floor(Math.random() * (200 - 100) + 100),
      kitchenArea: Math.floor(Math.random() * (200 - 100) + 100),
      distanceFromCenter: Math.floor(Math.random() * (200 - 100) + 100),
      admArea: returnRandomFromEnum(AdminDistrictsOfMoscow),
      district: faker.lorem.words(5),
      sellingPoint: faker.lorem.words(5),
      geoCoordinateX: faker.lorem.word(7),
      geoCoordinateY: faker.lorem.word(7),
      subwayStation: faker.lorem.words(4),
      timeToSubway: Math.floor(Math.random() * (200 - 100) + 100),

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

      max_adults: Math.floor(Math.random() * (6 - 1) + 1),
      max_children: Math.floor(Math.random() * (6 - 1) + 1)
    }
  })
  .relation('accommodations', () => AccommodationsFactory)
  .relation('services', () => ServicesFactory)
  .relation('banners', () => BannersFactory)
  .build()

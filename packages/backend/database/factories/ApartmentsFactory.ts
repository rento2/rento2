import Factory from '@ioc:Adonis/Lucid/Factory'
import Apartment from 'App/Models/Apartment'
import { AccommodationsFactory } from 'Database/factories/AccommodationsFactory'
import Term from '../../common/enums/Term'
import { returnRandomFromEnum } from '../../common/helpers/enumService'
import { AdminDistrictsOfMoscow } from '../../common/enums/AdminDistrictsOfMoscow'
import { ServicesFactory } from './ServicesFactory'
import { BannersFactory } from './BannersFactory'
import { OrdersFactory } from './OrdersFactory'
import { SleepingPlacesFactory } from './SleepingPlacesFactory'
import { PhotoFactory } from './PhotoFactory'

export const ApartmentsFactory = Factory.define(Apartment, ({ faker }) => {
  return {
    type: returnRandomFromEnum(Term),
    isActive: faker.datatype.boolean(),
    name: faker.internet.userName(),
    latinName: faker.name.findName(),
    description: faker.lorem.paragraph(),
    bnovoId: faker.datatype.number(),
    price: faker.datatype.number(100_000),
    pricePerMonth: faker.datatype.number(100_000),
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
    subwayLine: faker.lorem.words(4),
    timeToSubwayByFoot: Math.floor(Math.random() * (200 - 100) + 100),
    timeToSubwayByVehicle: Math.floor(Math.random() * (200 - 100) + 100),

    repairs: +(Math.random() * (9 - 1) + 1).toFixed(1),
    purity: +(Math.random() * (9 - 1) + 1).toFixed(1),
    location: +(Math.random() * (9 - 1) + 1).toFixed(1),
    price_quality: +(Math.random() * (9 - 1) + 1).toFixed(1),
    total_rating: +(Math.random() * (9 - 1) + 1).toFixed(1),

    check_in_start: faker.datatype.datetime(),
    check_in_end: faker.datatype.datetime(),
    check_out_end: faker.datatype.datetime(),

    smoking_allowed: faker.datatype.boolean(),
    partying_allowed: faker.datatype.boolean(),
    children_allowed: faker.datatype.boolean(),
    pets_allowed: faker.datatype.boolean(),

    max_adults: faker.datatype.number(10),
    max_children: faker.datatype.number(10),
  }
})
  .relation('accommodations', () => AccommodationsFactory)
  .relation('services', () => ServicesFactory)
  .relation('banners', () => BannersFactory)
  .relation('orders', () => OrdersFactory)
  .relation('sleepingPlaces', () => SleepingPlacesFactory)
  .relation('photos', () => PhotoFactory)
  .build()

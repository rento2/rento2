import Factory from '@ioc:Adonis/Lucid/Factory'
import Apartment from 'App/Models/Apartment'
import { AccommodationsFactory } from 'Database/factories/AccommodationsFactory'
import Term from '../../common/enums/Term'
import { AdminDistrictsOfMoscow } from '../../common/enums/AdminDistrictsOfMoscow'
import { ServicesFactory } from './ServicesFactory'
import { BannersFactory } from './BannersFactory'
import { OrdersFactory } from './OrdersFactory'
import { SleepingPlacesFactory } from './SleepingPlacesFactory'
import { PhotoFactory } from './PhotoFactory'
import { SubwayStations } from '../../common/constants/SubwayStations'

export const ApartmentsFactory = Factory.define(Apartment, ({ faker }) => {
  return {
    type: faker.random.arrayElement(Object.values(Term)),
    isActive: faker.datatype.boolean(),
    name: faker.internet.userName(),
    latinName: faker.name.findName(),
    description: faker.lorem.paragraph(),
    bnovoId: faker.datatype.number(),
    inpars_id: faker.datatype.number(),
    price: faker.datatype.number(100_000),
    pricePerMonth: faker.datatype.number(100_000),
    discount: Math.floor(Math.random() * (200 - 100) + 100),
    commission: Math.floor(Math.random() * (200 - 100) + 100),
    utilityBills: Math.floor(Math.random() * (200 - 100) + 100),
    securityDepositShort: Math.floor(Math.random() * (200 - 100) + 100),
    securityDepositLong: Math.floor(Math.random() * (200 - 100) + 100),
    roomsNum: faker.datatype.number({ min: 1, max: 5, precision: 1 }),
    storey: faker.datatype.number({ min: 1, max: 19, precision: 1 }),
    totalStoreys: faker.datatype.number({ min: 1, max: 19, precision: 1 }),
    area: faker.datatype.number({ min: 20, max: 300, precision: 1 }),
    kitchenArea: faker.datatype.number({ min: 4, max: 25, precision: 1 }),
    distanceFromCenter: faker.datatype.number({ min: 0, max: 25, precision: 1 }),
    admArea: faker.random.arrayElement(Object.values(AdminDistrictsOfMoscow)),
    district: faker.address.city(),
    sellingPoint: faker.lorem.words(5),
    geoCoordinateX: faker.address.latitude(56, 55, 4),
    geoCoordinateY: faker.address.longitude(38, 36, 4),
    subwayStation: faker.random.arrayElement(SubwayStations).title,
    subwayLine: faker.random.arrayElement(SubwayStations).line.title,
    timeToSubwayByFoot: faker.datatype.number({ min: 0, max: 180, precision: 5 }),
    timeToSubwayByVehicle: faker.datatype.number({ min: 0, max: 60, precision: 5 }),

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

    isPopular: faker.datatype.boolean(),
    isRentoChoose: faker.datatype.boolean(),
  }
})
  .relation('accommodations', () => AccommodationsFactory)
  .relation('services', () => ServicesFactory)
  .relation('banners', () => BannersFactory)
  .relation('orders', () => OrdersFactory)
  .relation('sleepingPlaces', () => SleepingPlacesFactory)
  .relation('photos', () => PhotoFactory)
  .build()

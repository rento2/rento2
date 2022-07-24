import { rules, schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidatorMessages from 'App/Validators/ValidatorMessages'
import { Term } from '../../common/enums/Term'
import { AdminDistrictsOfMoscow } from '../../common/enums/AdminDistrictsOfMoscow'

export default class ApartmentValidator extends ValidatorMessages {
  constructor (protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    type: schema.enum(Object.values(Term)),
    isActive: schema.boolean(),
    name: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255),
      rules.regex(/^[a-zA-Z0-9-_. ]+$/),
    ]),
    latinName: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255),
      rules.regex(/^[a-zA-Z0-9-_. ]+$/),
    ]),
    description: schema.string({ trim: true }, [
      rules.minLength(15),
      rules.maxLength(1024),
    ]),
    bnovoId: schema.number([
      rules.unsigned(),
    ]),
    price: schema.number([rules.unsigned(), rules.range(0, 9999999.99)]),
    pricePerMonth: schema.number([rules.unsigned(), rules.range(0, 9999999)]),
    discount: schema.number([rules.unsigned(), rules.range(0, 99999.99)]),
    commission: schema.number([rules.unsigned(), rules.range(0, 9999999.99)]),
    utilityBills: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999.99),
    ]),
    securityDepositShort: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999.99),
    ]),
    securityDepositLong: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999.99),
    ]),
    roomsNum: schema.number([rules.unsigned(), rules.range(1, 200)]),

    storey: schema.number([rules.unsigned(), rules.range(0, 300)]),
    totalStoreys: schema.number([rules.unsigned(), rules.range(1, 300)]),

    area: schema.number([rules.unsigned(), rules.range(0, 9999999.99)]),
    kitchenArea: schema.number([rules.unsigned(), rules.range(0, 9999999.99)]),
    distanceFromCenter: schema.number([
      rules.unsigned(),
      rules.range(0, 9999999.99),
    ]),
    admArea: schema.enum(Object.values(AdminDistrictsOfMoscow)),
    district: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255),
    ]),
    sellingPoint: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(1023),
    ]),
    geoCoordinateX: schema.number(),
    geoCoordinateY: schema.number(),
    metroAvailabilityByFoot: schema.number([
      rules.unsigned(),
      rules.range(0, 360),
    ]),
    metroAvailabilityByVehicle: schema.number([
      rules.unsigned(),
      rules.range(0, 360),
    ]),

    repairs: schema.number([rules.unsigned(), rules.range(0, 99.9)]),
    purity: schema.number([rules.unsigned(), rules.range(0, 99.9)]),
    location: schema.number([rules.unsigned(), rules.range(0, 99.9)]),
    priceQuality: schema.number([rules.unsigned(), rules.range(0, 99.9)]),
    totalRating: schema.number([rules.unsigned(), rules.range(0, 99.9)]),

    checkInStart: schema.date(),
    checkInEnd: schema.date(),
    checkOutEnd: schema.date(),

    smokingAllowed: schema.boolean(),
    partyingAllowed: schema.boolean(),
    childrenAllowed: schema.boolean(),
    petsAllowed: schema.boolean(),

    maxAdults: schema.number([rules.unsigned(), rules.range(0, 99)]),
    maxChildren: schema.number([rules.unsigned(), rules.range(0, 99)]),

    accommodations: schema.array().members(
      schema.object().members({
        id: schema.number([rules.unsigned()]),
      })
    ),

    metroStations: schema.array().members(
      schema.object().members({
        id: schema.number([rules.unsigned()]),
      })
    ),

    sleepingPlaces: schema.array().members(
      schema.object().members({
        id: schema.number([rules.unsigned()]),
        number: schema.number([rules.unsigned(), rules.range(0, 32)]),
      })
    ),
  })
}

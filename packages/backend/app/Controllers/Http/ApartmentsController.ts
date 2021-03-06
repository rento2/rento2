import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Apartment } from 'App/Models'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import {
  creatingErrMsg,
  creatingOkMsg,
  creatingPaginatedList,
} from '../../../common/helpers/creatingResponse'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
import ApartmentValidator from 'App/Validators/ApartmentValidator'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Redis from '@ioc:Adonis/Addons/Redis'
import murmurhash from 'murmurhash'

export default class ApartmentsController {
  public async list ({ response, request }: HttpContextContract): Promise<void> {
    const { sortDirection } = request.qs()
    const { search, fields } = await request.validate({
      schema: schema.create({
        search: schema.string.optional(),
        fields: schema.string.optional({}, [
          rules.fieldNames()
        ])
      }),
    })

    let apartments
    if (fields) {
      apartments = Apartment.query()
        .select(['id', 'name', ...fields.split(',')])
    } else {
      apartments = Apartment.query()
        .preload('accommodations')
        .preload('sleepingPlaces')
        .preload('services')
        .preload('banners')
        .preload('photos')
    }

    if (search) {
      apartments = apartments.where('name', 'ilike', `%${search}%`)
    }

    const cacheWrapped = async (query: ModelQueryBuilderContract<typeof Apartment, Apartment>): Promise<Apartment[]> => {
      const queryCacheKey = `rento:apartments-collections:${murmurhash.v3(query.toQuery())}`
      const cachedRawResult = await Redis.get(queryCacheKey)
      if (!cachedRawResult) {
        const fetchedRows = await query
        await Redis.set(queryCacheKey, JSON.stringify(fetchedRows))
        await Redis.expire(queryCacheKey, 30 * 60) // 30 minutes

        return fetchedRows
      }

      return JSON.parse(cachedRawResult)
    }
    const wrappedQueriesList = [
      Apartment.query().where('isPopular', true).orderBy('createdAt', 'desc').limit(10),
      Apartment.query().where('isRentoChoose', true).orderBy('createdAt', 'desc').limit(10),
      Apartment.query().orderBy('createdAt', 'desc').limit(10), // todo put the correct metro stations here
      Apartment.query().orderBy('createdAt', 'desc').limit(10),
      Apartment.query().orderByRaw('random()').limit(10),
    ].map(async query => await cacheWrapped(query))

    const [popular, rentoChoose, inCityCenter, newlyAdded, nearTheSubway] = await Promise.all(wrappedQueriesList)
    const fetchedApartments = await apartments
      .orderBy('createdAt', sortDirection === 'asc' ? 'asc' : 'desc')
      .paginate(request.param('page', 1))
    return response
      .status(HttpStatusCode.OK)
      .send(
        creatingPaginatedList(fetchedApartments, {
          collections: {
            popular, rentoChoose, inCityCenter, newlyAdded, nearTheSubway
          }
        })
      )
  }

  public async many ({ response, request }: HttpContextContract): Promise<void> {
    const { sortDirection } = request.qs()
    const { ids } = await request.validate({
      schema: schema.create({
        ids: schema.array().members(schema.number()),
      }),
    })

    const apartments = Apartment.query()
      .preload('accommodations')
      .preload('sleepingPlaces')
      .preload('services')
      .preload('banners')
      .preload('photos')
      .orderBy('createdAt', sortDirection === 'asc' ? 'asc' : 'desc')
      .whereIn('id', ids)
      .paginate(1, 100)

    return response
      .status(HttpStatusCode.OK)
      .send(
        creatingPaginatedList(await apartments)
      )
  }

  public async one ({ request, response }: HttpContextContract): Promise<void> {
    const { fields } = await request.validate({
      schema: schema.create({
        fields: schema.string.optional({}, [
          rules.fieldNames()
        ]),
      }),
    })

    let apartment
    if (fields) {
      apartment = await Apartment.query()
        .select(['id', 'name', ...fields.split(',')])
        .where('id', request.param('id')).first()
    } else {
      apartment = await Apartment.query()
        .preload('accommodations')
        .preload('sleepingPlaces')
        .preload('services')
        .preload('banners')
        .preload('photos')
        .where('id', request.param('id')).first()
    }

    if (!apartment) {
      return response.send(creatingErrMsg('error', 'Apartment not found'))
    } else {
      return response.status(HttpStatusCode.OK).send(creatingOkMsg(apartment))
    }
  }

  public async create ({
    request,
    response,
  }: HttpContextContract): Promise<void> {
    const apartmentPayload = await request.validate(ApartmentValidator)
    const apartment = await Apartment.create(apartmentPayload)

    await Promise.all([
      apartment
        .related('accommodations')
        .attach(apartmentPayload.accommodations.map(({ id }) => id)),
      apartment
        .related('metroStations')
        .attach(apartmentPayload.metroStations.map(({ id }) => id)),
      apartment.related('sleepingPlaces').attach(
        apartmentPayload.sleepingPlaces.reduce(
          (prev, { id, number }) => ({
            ...prev,
            [id]: { number },
          }),
          {}
        )
      ),
    ])

    return response
      .status(HttpStatusCode.Created)
      .send(creatingOkMsg(apartment))
  }

  public async update ({
    response,
    request,
  }: HttpContextContract): Promise<void> {
    const apartment = await Apartment.query()
      .preload('accommodations')
      .preload('sleepingPlaces').preload('metroStations')
      .where('id', request.param('id', null)).first()

    if (!apartment) {
      return response.status(HttpStatusCode.NotFound).send(creatingErrMsg('error', 'Apartments not found'))
    }

    const modifiedApartmentPayload = await request.validate(ApartmentValidator)
    await Promise.all([
      apartment.related('accommodations')
        .detach(apartment.accommodations.map(({ id }) => id)),
      apartment.related('metroStations')
        .detach(apartment.metroStations.map(({ id }) => id)),
      apartment.related('sleepingPlaces')
        .detach(apartment.sleepingPlaces.map(({ id }) => id)),
    ])

    await Promise.all([
      apartment.related('accommodations')
        .attach(modifiedApartmentPayload.accommodations.map(({ id }) => id)),
      apartment.related('metroStations')
        .attach(modifiedApartmentPayload.metroStations.map(({ id }) => id)),
      apartment.related('sleepingPlaces')
        .attach(modifiedApartmentPayload.sleepingPlaces.map(({ id }) => id)),
    ])

    const updatedApartment = await apartment
      .merge(modifiedApartmentPayload)
      .save()

    return response
      .status(HttpStatusCode.OK)
      .send(creatingOkMsg(updatedApartment))
  }

  public async delete ({
    response,
    request,
  }: HttpContextContract): Promise<any> {
    const apartment = await Apartment.findOrFail(request.param('id', null))

    await apartment.delete()
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(apartment.id))
  }
}

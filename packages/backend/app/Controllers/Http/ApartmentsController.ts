import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Apartment } from 'App/Models'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import {
  creatingErrMsg,
  creatingOkMsg,
  creatingPaginatedList,
} from '../../../common/helpers/creatingResponse'
import { schema } from '@ioc:Adonis/Core/Validator'
import ApartmentValidator from 'App/Validators/ApartmentValidator'
import subwayStationToLine from '../../../common/helpers/subwayStationToLine'

export default class ApartmentsController {
  public async list ({ response, request }: HttpContextContract): Promise<void> {
    const { search, fields } = await request.validate({
      schema: schema.create({
        search: schema.string.optional(),
        fields: schema.string.optional(),
      }),
    })
    const selectedFields = []

    fields ? selectedFields.push('id', 'name', ...fields.split(',')) : selectedFields.push('*')

    let apartments = Apartment.query()
      .preload('accommodations')
      .preload('sleepingPlaces')
      .preload('services')
      .preload('banners')
      .preload('photos')
      .select(selectedFields)

    if (search) {
      apartments = apartments.where('name', 'ilike', `%${search}%`)
    }

    return response
      .status(HttpStatusCode.OK)
      .send(
        creatingPaginatedList(
          await apartments.paginate(request.param('page', 1))
        )
      )
  }

  public async one ({ request, response }: HttpContextContract): Promise<void> {
    const { fields } = await request.validate({
      schema: schema.create({
        fields: schema.string.optional(),
      }),
    })
    const selectedFields = []
    fields ? selectedFields.push('id', ...fields.split(',')) : selectedFields.push('*')

    const apartment = await Apartment
      .query()
      .preload('accommodations')
      .preload('sleepingPlaces')
      .preload('services')
      .preload('banners')
      .preload('photos')
      .select(selectedFields)
      .where('id', request.param('id')).first()

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
    const subwayLine = subwayStationToLine(apartmentPayload.subway_station)
    apartmentPayload.subway_line = subwayLine
    const apartment = await Apartment.create(apartmentPayload)

    await Promise.all([
      apartment
        .related('accommodations')
        .attach(apartmentPayload.accommodations.map(({ id }) => id)),
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
    const apartment = await Apartment.findOrFail(request.param('id', null))

    const updatedApartment = await apartment
      .merge(await request.validate(ApartmentValidator))
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

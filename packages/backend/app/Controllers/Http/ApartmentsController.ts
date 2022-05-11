import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Apartment } from 'App/Models'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import {
  creatingOkMsg,
  creatingPaginatedList,
} from '../../../common/helpers/creatingResponse'
import { schema } from '@ioc:Adonis/Core/Validator'
import ApartmentValidator from 'App/Validators/ApartmentValidator'
import subwayStationToLine from '../../../common/helpers/subwayStationToLine'

export default class ApartmentsController {
  public async list ({ response, request }: HttpContextContract): Promise<void> {
    const { search } = await request.validate({
      schema: schema.create({
        search: schema.string.optional(),
      }),
    })

    let apartments = Apartment.query()
      .preload('accommodations')
      .preload('sleepingPlaces')
      .preload('services')
      .preload('banners')
      .preload('photos')

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
    const apartment = await Apartment.findOrFail(request.param('id', null))
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(apartment))
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

/**
* @list
* @summary Gives the apartment page.
* @responseBody 200 - <Apartment[]>.with(relations)
* @responseBody 200-0 - Empty apartment page - {"meta":{"result":"OK","pagination":{"perPage":20,"currentPage":44444444222241,"hasMorePages":false,"total":24}},"data":[]}
*/

/**
* @one
* @summary Gives the one apartment.
* @responseBody 200 - <Apartment>.with(relations)
* @responseBody 404 - Not Found - {"meta":{"result":"ENTITY_NOT_FOUND","error":{"message":"ERROR"}},"data":"null"}
*/

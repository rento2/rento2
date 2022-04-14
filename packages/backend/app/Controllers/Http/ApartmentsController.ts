import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateApartmentValidator from 'App/Validators/ApartmentValidator'
import { Apartment } from 'App/Models'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg, creatingPaginatedList } from '../../../common/helpers/creatingResponse'

export default class ApartmentsController {
  public async index ({ response, request }: HttpContextContract): Promise<void> {
    const apartments =
      await Apartment.query()
        .preload('accommodations')
        .preload('sleepingPlaces')
        .preload('services')
        .preload('banners')
        .preload('photos')
        .paginate(request.param('page', 1))

    return response.status(HttpStatusCode.OK).send(creatingPaginatedList(apartments))
  }

  public async show ({ request, response }: HttpContextContract): Promise<void> {
    const idFront = request.params()['id']
    const id: number = Number.parseInt(idFront)

    if (isNaN(id)) {
      return response.status(HttpStatusCode.UnprocessableEntity)
        .send(creatingErrMsg('error', `Incorrect syntax: ${id}`))
    }

    const apartment = await Apartment.query().where('id', id).preload('accommodations')
    if (apartment.length === 0) {
      return response.send(creatingErrMsg('error', `Apartments ${id} not found`))
    }
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(apartment))
  }

  public async store ({ request, response }: HttpContextContract): Promise<void> {
    const apartmentPayload = await request.validate(CreateApartmentValidator)
    const apartment = await Apartment.create(apartmentPayload)

    await Promise.all([
      apartment.related('accommodations').attach(
        apartmentPayload.accommodations.map(({ id }) => id)
      ),
      apartment.related('sleepingPlaces').attach(
        (apartmentPayload.sleepingPlaces).reduce(
          (prev, { id, number }) => ({
            ...prev,
            [id]: { number }
          }), {}
        )
      )
    ])

    return response.status(HttpStatusCode.Created)
      .send(creatingOkMsg(apartment))
  }

  public async destroy ({ response, params }: HttpContextContract): Promise<any> {
    const id: string = params['id']

    const apartment = await Apartment.findBy('id', id)

    if (apartment !== null) {
      await apartment.related('accommodations').detach()
      await apartment.delete()
      response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', id))
    } else {
      response.status(HttpStatusCode.NotFound).send(creatingErrMsg('error', `Apartments ${id} not found`))
    }
  }
}

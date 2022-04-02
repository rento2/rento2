import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateApartmentValidator from 'App/Validators/CreateApartmentValidator'
import { Apartment } from 'App/Models'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg } from '../../../common/helpers/creatingResponse'

export default class ApartmentsController {
  public async index ({ response }: HttpContextContract): Promise<void> {
    const apartments = await Apartment.query().preload('accommodations')

    response.header('access-control-expose-headers', 'content-range')
    response.header('content-Range', 5)
    return response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', apartments))
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
    return response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', apartment))
  }

  public async store ({ request, response }: HttpContextContract): Promise<void> {
    const { accommodations, ...apartmentData } = request.body()

    await request.validate(CreateApartmentValidator)
    const apartment = await Apartment.create(apartmentData)

    const idOfAccommodations = accommodations.map((p: { id: number }) => +p.id)
    if (idOfAccommodations.length === 0) {
      return response.status(HttpStatusCode.Created)
        .send(creatingOkMsg('Apartments are created without amenities', [apartment]))
    }

    await Promise.all(idOfAccommodations.map(async (item: number) => {
      await apartment.related('accommodations').attach([item])
    })).catch(() => {
      return response.status(HttpStatusCode.InternalServerError).json(creatingErrMsg('error', 'Error creating a record'))
    })

    const apartmentResp = await Apartment.query().where('id', apartment.id).preload('accommodations')
    return response.status(HttpStatusCode.Created).send(creatingOkMsg('Apartments with amenities created', apartmentResp))
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

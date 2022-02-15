import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Apartment from 'App/Models/Apartment'
import CreateApartmentValidator from 'App/Validators/CreateApartmentValidator'
import creatingOkMsg from 'App/Controllers/creatingOkMsg'
import creatingErrorMsg from 'App/Controllers/creatingErrorMsg'
import { HttpCode } from '../../../common/constants/http-status-codes'
import Accommodation from 'App/Models/Accommodation'
import { AccommodationInt } from '../../../common/interfaces/accommodation-int'

export default class ApartmentsController {
  public async index ({ response }: HttpContextContract): Promise<void> {
    const apartments = await Apartment.query().preload('accommodations')

    return response.status(HttpCode.OK).json(creatingOkMsg(apartments))
  }

  public async show ({ request, response }: HttpContextContract): Promise<void> {
    const id: string = request.params()['id']

    const apartment = await Apartment.query().where('id', id).preload('accommodations')

    if (apartment.length === 0) {
      return response.status(HttpCode.NotFound).json(creatingErrorMsg('error', `Apartments ${id} not found`))
    }
    return response.status(HttpCode.OK).json(creatingOkMsg(apartment))
  }

  public async store ({ request, response }: HttpContextContract): Promise<void> {
    const { accommodations, ...data } = request.body()

    await request.validate(CreateApartmentValidator)

    const apartment = await Apartment.create(data)
    await Promise.all(accommodations.map(async (item: AccommodationInt) => {
      const accommodation = await Accommodation.create(item)
      await apartment.related('accommodations').attach([accommodation.id])
    }))
      .catch(() => {
        return response.status(HttpCode.InternalServerError).json(creatingErrorMsg('error', 'error creating a record'))
      })

    const apartmentCreate = await Apartment.query().where('id', apartment.id).preload('accommodations')
    return response.status(HttpCode.Created).json(creatingOkMsg(apartmentCreate))
  }

  public async destroy ({ response, params }: HttpContextContract): Promise<any> {
    const id: string = params['id']

    const apartment = await Apartment.findBy('id', id)

    if (apartment !== null) {
      await apartment.related('accommodations').detach()
      await apartment.delete()
      response.status(HttpCode.OK).json(creatingOkMsg(id))
    } else {
      response.status(HttpCode.NotFound).json(creatingErrorMsg('error', `Apartments ${id} not found`))
    }
  }
}

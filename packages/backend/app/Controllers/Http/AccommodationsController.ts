import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateAccommodationValidator from 'App/Validators/CreateAccommodationValidator'
import { Accommodation } from 'App/Models'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg } from '../../../common/helpers/creatingResponse'

export default class AccommodationsController {
  public async index ({ response }: HttpContextContract): Promise<void> {
    const accommodations = await Accommodation.query()

    return response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', accommodations))
  }

  public async show ({ request, response }: HttpContextContract): Promise<void> {
    const idFront = request.params()['id']
    const id: number = Number.parseInt(idFront)

    if (isNaN(id)) {
      return response.status(HttpStatusCode.UnprocessableEntity)
        .send(creatingErrMsg('error', `Incorrect syntax: ${id}`))
    }

    const accommodation = await Accommodation.query().where('id', id)
    if (accommodation.length === 0) {
      return response.send(creatingErrMsg('error', `Accommodation ${id} not found`))
    }
    return response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', accommodation))
  }

  public async store ({ request, response }: HttpContextContract): Promise<void> {
    const accommodations = request.body()

    await request.validate(CreateAccommodationValidator)
    const accommodation = await Accommodation.create(accommodations)
    console.log(accommodation.id)


    const accommodationResp = await Accommodation.query().where('id', accommodation.id)

    return response.status(HttpStatusCode.Created).send(creatingOkMsg('Accommodation created', accommodationResp))
  }

  public async update ({ request, response, params }: HttpContextContract): Promise<void> {
    const accommodations = request.body()
    const id: string = params['id']

    await request.validate(CreateAccommodationValidator)
    await Accommodation.query().where('id', id).update(accommodations)

    const accommodation = await Accommodation.findBy('id', id)

    return response.status(HttpStatusCode.Created).send(accommodation)
  }

  public async destroy ({ response, params }: HttpContextContract): Promise<any> {
    const id: string = params['id']

    const accommodation = await Accommodation.findBy('id', id)

    if (accommodation !== null) {
      await accommodation.delete()
      response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', id))
    } else {
      response.status(HttpStatusCode.NotFound).send(creatingErrMsg('error', `Accommodations ${id} not found`))
    }
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingOkMsg, creatingPaginatedList } from '../../../common/helpers/creatingResponse'
import Accommodation from 'App/Models/Accommodation'
import AccommodationValidator from 'App/Validators/AccommodationValidator'

export default class AccommodationsController {
  public async list ({ response, request }: HttpContextContract): Promise<void> {
    const { sortDirection } = request.qs()
    return response
      .status(HttpStatusCode.OK).send(
        creatingPaginatedList(
          await Accommodation.query()
          .orderBy('createdAt', sortDirection === 'asc' ? 'asc' : 'desc')
          .paginate(request.param('page', 1))
        )
      )
  }

  public async one ({ response, request }: HttpContextContract): Promise<void> {
    const accommodation = await Accommodation.findOrFail(request.param('id', null))
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(accommodation))
  }

  public async update ({ response, request }: HttpContextContract): Promise<void> {
    const accommodation = await Accommodation.findOrFail(request.param('id', null))

    const updatedAccommodation = await accommodation.merge(
      await request.validate(AccommodationValidator)
    ).save()

    return response.status(HttpStatusCode.OK).send(creatingOkMsg(updatedAccommodation))
  }

  public async create ({ request, response }: HttpContextContract): Promise<void> {
    const accommodation = await Accommodation.create(
      await request.validate(AccommodationValidator)
    )

    return response
      .status(HttpStatusCode.Created)
      .send(creatingOkMsg(accommodation))
  }

  public async delete ({ response, request }: HttpContextContract): Promise<any> {
    const accommodation = await Accommodation.findOrFail(request.param('id', null))

    await accommodation.delete()
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(accommodation.id))
  }
}

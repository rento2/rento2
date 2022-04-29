import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingOkMsg, creatingPaginatedList } from '../../../common/helpers/creatingResponse'
import Accommodation from 'App/Models/Accommodation'
import AccommodationValidator from 'App/Validators/AccommodationValidator'

export default class AccommodationsController {
  public async list ({ response, request }: HttpContextContract): Promise<void> {
    return response
      .status(HttpStatusCode.OK).send(
        creatingPaginatedList(
          await Accommodation.query().paginate(request.param('page', 1))
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

/**
* @list
* @summary Gives the accommodations page.
* @responseBody 200 - <Accommodation[]>
* @responseBody 200-0 - Empty apartment page - {"meta":{"result":"OK","pagination":{"perPage":20,"currentPage":44444444222241,"hasMorePages":false,"total":24}},"data":[]}
* @responseBody 401 - Not unauthorized - {"meta":{"result":"NOT_AUTHORIZED","error":{"message":"ERROR"}},"data":[]}
*/

/**
* @one
* @summary Gives the one accommodation.
* @responseBody 200 - <Accommodation>
* @responseBody 404 - Not Found - {"meta":{"result":"ENTITY_NOT_FOUND","error":{"message":"ERROR"}},"data":"null"}
* @responseBody 401 - Not unauthorized - {"meta":{"result":"NOT_AUTHORIZED","error":{"message":"ERROR"}},"data":"null"}
*/

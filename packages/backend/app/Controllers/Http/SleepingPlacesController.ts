import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg, creatingPaginatedList } from '../../../common/helpers/creatingResponse'
import SleepingPlace from 'App/Models/SleepingPlace'
import SleepingPlaceValidator from 'App/Validators/SleepingPlaceValidator'

export default class SleepingPlacesController {
  public async list ({ response, request }: HttpContextContract): Promise<void> {
    return response
      .status(HttpStatusCode.OK).send(
        creatingPaginatedList(
          await SleepingPlace.query().paginate(request.param('page', 1))
        )
      )
  }

  public async one ({ response, request }: HttpContextContract): Promise<void> {
    const sleepingPlace = await SleepingPlace.find(request.param('id', null))
    if (!sleepingPlace) {
      return response.status(HttpStatusCode.NotFound).send(creatingErrMsg('error', 'Sleeping place not found'))
    }

    return response.status(HttpStatusCode.OK).send(creatingOkMsg(sleepingPlace))
  }

  public async update ({ response, request }: HttpContextContract): Promise<void> {
    const sleepingPlace = await SleepingPlace.find(request.param('id', null))
    if (!sleepingPlace) {
      return response.send(creatingErrMsg('error', 'Sleeping place not found'))
    }

    const updatedSleepingPlace = await sleepingPlace.merge(
      await request.validate(SleepingPlaceValidator)
    ).save()

    return response.status(HttpStatusCode.OK).send(creatingOkMsg(updatedSleepingPlace))
  }

  public async create ({ request, response }: HttpContextContract): Promise<void> {
    const sleepingPlace = await SleepingPlace.create(
      await request.validate(SleepingPlaceValidator)
    )

    return response
      .status(HttpStatusCode.Created)
      .send(creatingOkMsg(sleepingPlace))
  }

  public async delete ({ response, request }: HttpContextContract): Promise<any> {
    const sleepingPlace = await SleepingPlace.find(request.param('id', null))
    if (!sleepingPlace) {
      return response.send(creatingErrMsg('error', 'Sleeping place not found'))
    }

    await sleepingPlace.delete()
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(sleepingPlace.id))
  }
}

/**
* @list
* @summary Gives the sleeping places page.
* @responseBody 200 - <SleepingPlace[]>
* @responseBody 200-0 - Empty apartment page - {"meta":{"result":"OK","pagination":{"perPage":20,"currentPage":44444444222241,"hasMorePages":false,"total":24}},"data":[]}
* @responseBody 401 - Not unauthorized - {"meta":{"result":"NOT_AUTHORIZED","error":{"message":"ERROR"}},"data":[]}
*/

/**
* @one
* @summary Gives the one sleeping place.
* @responseBody 200 - <SleepingPlace>
* @responseBody 404 - Not Found - {"meta":{"result":"ENTITY_NOT_FOUND","error":{"message":"ERROR"}},"data":"null"}
* @responseBody 401 - Not unauthorized - {"meta":{"result":"NOT_AUTHORIZED","error":{"message":"ERROR"}},"data":"null"}
*/

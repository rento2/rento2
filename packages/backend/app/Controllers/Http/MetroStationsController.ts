import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg, creatingPaginatedList } from '../../../common/helpers/creatingResponse'
import CreateMetroStationValidator from 'App/Validators/MetroStationValidator'
import MetroStation from 'App/Models/MetroStation'

export default class MetroStationsController {
  public async list ({ response, request }: HttpContextContract): Promise<void> {
    return response.status(HttpStatusCode.OK).send(
      creatingPaginatedList(
        await MetroStation.query().paginate(request.param('page', 1))
      )
    )
  }

  public async one ({ response, request }: HttpContextContract): Promise<void> {
    const metroStation = await MetroStation.findOrFail(request.param('id', null))
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(metroStation))
  }

  public async update ({ response, request }: HttpContextContract): Promise<void> {
    const metroStation = await MetroStation.find(request.param('id', null))
    if (!metroStation) {
      return response.send(creatingErrMsg('error', 'MetroStation not found'))
    }

    const updatedMetroStation = await metroStation.merge(
      await request.validate(CreateMetroStationValidator)
    ).save()

    return response.status(HttpStatusCode.OK).send(creatingOkMsg(updatedMetroStation))
  }

  public async create ({ request, response }: HttpContextContract): Promise<void> {
    const metroStation = await MetroStation.create({
      ...(await request.validate(CreateMetroStationValidator)),
    })

    return response
      .status(HttpStatusCode.Created)
      .send(creatingOkMsg(metroStation))
  }

  public async delete ({ response, request }: HttpContextContract): Promise<any> {
    const metroStation = await MetroStation.find(request.param('id', null))
    if (!metroStation) {
      return response.send(creatingErrMsg('error', 'MetroStation not found'))
    }

    await metroStation.delete()
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(metroStation.id))
  }
}

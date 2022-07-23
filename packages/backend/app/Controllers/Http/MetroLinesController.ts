import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg, creatingPaginatedList } from '../../../common/helpers/creatingResponse'
import CreateMetroLineValidator from 'App/Validators/MetroLineValidator'
import MetroLine from 'App/Models/MetroLine'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class MetroLinesController {
  public async list ({ response, request }: HttpContextContract): Promise<void> {
    const { sortDirection } = request.qs()
    return response.status(HttpStatusCode.OK).send(
      creatingPaginatedList(
        await MetroLine.query()
          .orderBy('createdAt', sortDirection === 'asc' ? 'asc' : 'desc')
          .paginate(request.param('page', 1))
      )
    )
  }

  public async one ({ response, request }: HttpContextContract): Promise<void> {
    const metroLine = await MetroLine.findOrFail(request.param('id', null))
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(metroLine))
  }

  public async many ({ response, request }: HttpContextContract): Promise<void> {
    const { sortDirection } = request.qs()
    const { ids } = await request.validate({
      schema: schema.create({
        ids: schema.array().members(schema.number()),
      }),
    })

    const stations = await MetroLine.query()
      .orderBy('createdAt', sortDirection === 'asc' ? 'asc' : 'desc')
      .whereIn('id', ids)
      .paginate(1, 100)

    return response
      .status(HttpStatusCode.OK)
      .send(
        creatingPaginatedList(stations)
      )
  }

  public async update ({ response, request }: HttpContextContract): Promise<void> {
    const metroLine = await MetroLine.find(request.param('id', null))
    if (!metroLine) {
      return response.send(creatingErrMsg('error', 'MetroLine not found'))
    }

    const updatedMetroLine = await metroLine.merge(
      await request.validate(CreateMetroLineValidator)
    ).save()

    return response.status(HttpStatusCode.OK).send(creatingOkMsg(updatedMetroLine))
  }

  public async create ({ request, response }: HttpContextContract): Promise<void> {
    const metroLine = await MetroLine.create({
      ...(await request.validate(CreateMetroLineValidator)),
    })

    return response
      .status(HttpStatusCode.Created)
      .send(creatingOkMsg(metroLine))
  }

  public async delete ({ response, request }: HttpContextContract): Promise<any> {
    const metroLine = await MetroLine.find(request.param('id', null))
    if (!metroLine) {
      return response.send(creatingErrMsg('error', 'MetroLine not found'))
    }

    await metroLine.delete()
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(metroLine.id))
  }
}

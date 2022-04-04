import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg } from '../../../common/helpers/creatingResponse'
import Service from 'App/Models/Service'
import CreateServiceValidator from 'App/Validators/CreateServiceValidator'

export default class ServicesController {
  public async list ({ response }: HttpContextContract): Promise<void> {
    return response
      .status(HttpStatusCode.OK)
      .send(creatingOkMsg(await Service.query()))
  }

  public async one ({ response, request }: HttpContextContract): Promise<void> {
    const service = await Service.find(request.param('id', null))
    if (!service) {
      return response.status(HttpStatusCode.NotFound).send(creatingErrMsg('error', 'Service not found'))
    }

    return response.status(HttpStatusCode.OK).send(creatingOkMsg(service))
  }

  public async update ({ response, request }: HttpContextContract): Promise<void> {
    const service = await Service.find(request.param('id', null))
    if (!service) {
      return response.send(creatingErrMsg('error', 'Service not found'))
    }

    const updatedService = await service.merge({
      ...(await request.validate(CreateServiceValidator)),
      type: request.body()['type'],
    }).save()

    return response.status(HttpStatusCode.OK).send(creatingOkMsg(updatedService))
  }

  public async create ({ request, response }: HttpContextContract): Promise<void> {
    const service = await Service.create({
      ...(await request.validate(CreateServiceValidator)),
      type: request.body()['type'],
    })

    return response
      .status(HttpStatusCode.Created)
      .send(creatingOkMsg(service))
  }

  public async delete ({ response, request }: HttpContextContract): Promise<any> {
    const service = await Service.find(request.param('id', null))
    if (!service) {
      return response.send(creatingErrMsg('error', 'Service not found'))
    }

    await service.delete()
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(service.id))
  }
}

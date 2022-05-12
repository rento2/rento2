import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg, creatingPaginatedList } from '../../../common/helpers/creatingResponse'
import Banner from 'App/Models/Banner'
import CreateBannerValidator from 'App/Validators/BannerValidator'

export default class BannersController {
  public async list ({ response, request }: HttpContextContract): Promise<void> {
    return response.status(HttpStatusCode.OK).send(
      creatingPaginatedList(
        await Banner.query().paginate(request.param('page', 1))
      )
    )
  }

  public async one ({ response, request }: HttpContextContract): Promise<void> {
    const banner = await Banner.findOrFail(request.param('id', null))
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(banner))
  }

  public async update ({ response, request }: HttpContextContract): Promise<void> {
    const banner = await Banner.find(request.param('id', null))
    if (!banner) {
      return response.send(creatingErrMsg('error', 'Banner not found'))
    }

    const updatedBanner = await banner.merge(
      await request.validate(CreateBannerValidator)
    ).save()

    return response.status(HttpStatusCode.OK).send(creatingOkMsg(updatedBanner))
  }

  public async create ({ request, response }: HttpContextContract): Promise<void> {
    const banner = await Banner.create({
      ...(await request.validate(CreateBannerValidator)),
    })

    return response
      .status(HttpStatusCode.Created)
      .send(creatingOkMsg(banner))
  }

  public async delete ({ response, request }: HttpContextContract): Promise<any> {
    const banner = await Banner.find(request.param('id', null))
    if (!banner) {
      return response.send(creatingErrMsg('error', 'Banner not found'))
    }

    await banner.delete()
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(banner.id))
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../common/constants/HttpStatusCode'
import { creatingErrMsg } from '../../common/helpers/creatingResponse'

export default class AuthMiddleware {
  public async handle ({ auth, response }: HttpContextContract, next: () => Promise<void>): Promise<void> {
    console.warn(await auth.use('jwt').check())
    if (await auth.use('jwt').check()) {
      return await next()
    }

    return response
      .status(HttpStatusCode.Unauthorized)
      .send(creatingErrMsg('NOT_AUTHORIZED'))
  }
}

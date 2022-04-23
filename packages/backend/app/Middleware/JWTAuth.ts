import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../common/constants/HttpStatusCode'
import { creatingErrMsg } from '../../common/helpers/creatingResponse'

export default class AuthMiddleware {
  public async handle ({ auth, response, request }: HttpContextContract, next: () => Promise<void>): Promise<void> {
    if (!request.cookie('refresh_token') || !request.cookie('access_token')) {
      return response
      .status(HttpStatusCode.Unauthorized)
      .send(creatingErrMsg('NOT_AUTHORIZED'))
    }

    const cookies = request.cookiesList()
    const expireTime = new Date(cookies['Expires'])

    if (!(Date.now() <= expireTime.getTime())) {
      return await next()
    } else {
      const token = await auth.use('jwt').loginViaRefreshToken(cookies['refresh_token'])
      response.cookie('access_token', token.accessToken, { expires: new Date(String(token.expiresAt)) })
    }
  }
}

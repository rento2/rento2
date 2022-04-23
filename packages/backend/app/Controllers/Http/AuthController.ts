import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg } from '../../../common/helpers/creatingResponse'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import { Exception } from '@adonisjs/core/build/standalone'

export default class AuthController {
  public async login ({ response, request, auth }: HttpContextContract): Promise<void> {
    const payload = await request.validate({
      schema: schema.create({
        email: schema.string([
          rules.email(),
        ]),
        password: schema.string(),
      })
    })

    const foundUser = await User.findBy('email', payload.email)
    if (!foundUser || !await Hash.verify(foundUser.password, payload.password)) {
      return response
        .status(HttpStatusCode.UnprocessableEntity)
        .send(creatingErrMsg('UNABLE_TO_AUTHORIZE', 'Wrong email or password'))
    }

    const token = await auth.use('jwt').generate(foundUser)

    response.cookie('access_token', token.accessToken, { expires: new Date(String(token.expiresAt)) })
    response.cookie('refresh_token', token.refreshToken)
  }

  public async refresh ({ response, request, auth }: HttpContextContract): Promise<void> {
    const payload = await request.validate({
      schema: schema.create({
        refreshToken: schema.string(),
      })
    })

    try {
      return response
        .status(HttpStatusCode.OK)
        .send(creatingOkMsg(
          await auth.use('jwt').loginViaRefreshToken(payload.refreshToken)
        ))
    } catch {
      throw new Exception('JWT refresh token is not valid', 422, 'ERR_JWS_INVALID')
    }
  }

  public async logout ({ response, auth }: HttpContextContract): Promise<void> {
    await auth.use('jwt').revoke()

    response.clearCookie('access_token')
    response.clearCookie('refresh_token')

    return response
      .status(HttpStatusCode.OK)
      .send(creatingOkMsg(true))
  }
}

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

    return response
      .status(HttpStatusCode.OK)
      .send(creatingOkMsg(
        await auth.use('jwt').generate(foundUser)
      ))
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

    return response
      .status(HttpStatusCode.OK)
      .send(creatingOkMsg(true))
  }
}

/**
* @login
* @summary Logins a user and returns a JWT-token
* @requestBody {"email": "admin@rento2.ru", "password": "123"}
* @paramQuery email - Email - @enum(admin@rento2.ru)
* @paramQuery password - Password - @enum(123)
*/

/**
* @refresh
* @summary Refresh a JWT-token
* @paramQuery refreshToken - RefreshToken
* @requestBody {"refreshToken": "a174d6a71982e3bab5b498ad24d1ee4db6ae9a6a56f7d86df097208f9f46eb07"}
*/

/**
* @logout
* @summary Logout
* @paramQuery refreshToken - RefreshToken
* @requestBody {"refreshToken": "a174d6a71982e3bab5b498ad24d1ee4db6ae9a6a56f7d86df097208f9f46eb07"}
*/

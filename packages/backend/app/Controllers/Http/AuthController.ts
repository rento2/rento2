import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg } from '../../../common/helpers/creatingResponse'
import { schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async login ({ response, request, auth }: HttpContextContract): Promise<void> {
    const payload = await request.validate({
      schema: schema.create({
        email: schema.string(),
        password: schema.string(),
      })
    })

    const foundUser = await User.findBy('email', payload.email)
    if (!foundUser || !await Hash.verify(foundUser.password, payload.password)) {
      return response
        .status(HttpStatusCode.NotFound)
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

    return response
      .status(HttpStatusCode.OK)
      .send(creatingOkMsg(
        await auth.use('jwt').loginViaRefreshToken(payload.refreshToken)
      ))
  }

  public async logout ({ response, auth }: HttpContextContract): Promise<void> {
    await auth.use('jwt').revoke()

    return response
      .status(HttpStatusCode.OK)
      .send(creatingOkMsg(true))
  }
}

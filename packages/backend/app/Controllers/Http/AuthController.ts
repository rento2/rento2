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
* @responseBody 200 - Successful login. - {"meta":{"result":"OK"},"data":{"type":"bearer","token":"eyJhbGciOiJSUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6IjEiLCJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5AcmVudG8yLnJ1In19LCJpYXQiOjE2NTEwNTM3MjEsImV4cCI6MTY1MTA1NTUyMX0.epmLe-qcZy66-k-y1lf0RM0CHJlZLCeoQSosiSHo5UvKTh7u9MDpeNk0uWXkw87jusFccSQEYSVSIfIDuhhueXO8Fwk3mJw0cM7Yi29-7VsMkPqtP-r9IPNF56m0oL2RZeEte2Fos2HHkAyGCz-fNHvZ47r-Zu5LfxtsFFDsdt7OpQLAJQ8fST0it3PhePop0VvnbRJEOfeHaJauHnB4zimB_ISQRYcZW5AeoaFPmJEV0GGwF49amZjLwrRSD38m09OnZB47UBPrLqpySECh3XuXJamYGfz9jFTLS9UCkeNONm6Y5tTCW0qqWUHfwYOJX1-XVIgkg9BUWXIAwg5jyxRTLjnx6Q7VToiY0iZHMRZJ8CmJx0mwhEA5YUwBQ10qpQTPWt7J0U21aPexBUzhCdNol-wzofz6xyflBM3jzZqR7C_ppqtAygwPlHnnJr6tMNqWLOGIOGWwL7JoP-jG4ljt0j1JIOnlNs4T6YdXLHphy8TP_tLZjybq9zZ_jw7AcEb_KT_pm0k3h4Hb9q-6ubAFM79oSYhHGvGIiGlz3-rAp53PfF-XpxSSRmQ1umQVaFU47a3L_AF4cyaAQu5yp7o_9D74zhHNr-CQSE_v3BOIz0-Wk5q_rVKPL5egyGmllnbARGX1mXv9AZ_z16PmJ-vrKaj714qjEBxMuglmS8Y","refreshToken":"5d5f599a2fad5cdf1d95cba37f55a32794178c29e2fe85e2cb826d5df05eae5c","expires_at":"2022-04-27T13:32:01.493+03:00"}}
* @responseBody 422 - Wrong email or password. - {"meta":{"result":"UNABLE_TO_AUTHORIZE","error":{"message":"Wrong email or password"}},"data":"null"}
*/

/**
* @refresh
* @summary Refresh a JWT-token
* @paramQuery refreshToken - RefreshToken
* @requestBody {"refreshToken": "a174d6a71982e3bab5b498ad24d1ee4db6ae9a6a56f7d86df097208f9f46eb07"}
* @responseBody 200 - Token refreshed - {"meta":{"result":"OK"},"data":{"type":"bearer","token":"eyJhbGciOiJSUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6IjEiLCJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5AcmVudG8yLnJ1In19LCJpYXQiOjE2NTEwNTQ5MDcsImV4cCI6MTY1MTA1NjcwN30.aPKg7oZBqUIVtoZaydmyKNv39kSj5yUjX-tQ5badL_g4ydTAsxxEyXRx5iGUo3myhUNWD4z0E0rB8l-873EE6_HaYin-S_xX5fzkDn0D6cW5RoAUquIHdf-mKcO95hebGl0PdGmKJvd6wllBvhG1QOn0cZIlcfZMERn2QGYk2P4gSXhBPMvXmjkEuD6Z4xkXL5hqSJU8nePBHvctNQVEIF9k4Wr8psrb1EknHeyOI75ugHgJul_r9J6_l-ggFyYyh_hNBzNhkXQ2Q3BGTg-x-RIVh_e2-cHAb_pbJA50ARMxDfbHnQXaHcWZgbkSYMST_hr1izgZk0jLEHTnAHUityUfW0U7xDk6L6xbUTkCaDfdDXATlXK4HsTWDzL9aOH36IqJOwKsjYUoiB0X-LemV378EBcubvn3Lm8RuZZL7BPNVrCOrsLKz3MOcPojEQ2D9sK7On96X3RvGyNWrSyrFTK9kwD6wdHH38MVUPQcSvWI1vhm2Pp34GWXjfXGQZt8nn6oGAYRPodJsN8zrNW9R0-3SeTZgmyqgUdlbAEvpZ6flXc5-VybgvZIGX5QvLkSy43vIEp7Y5hULvRYFiWj_kLcwrD-KFSl0LnQ60oRvwGrwtDWDF-VQnOUWaz71pzC0aqQ8cL3fpYM49RjdPyxH-b9lKOqbLYq8HEalZt23pg","refreshToken":"9b4c4eb6150ecf796fbb713947d479b85dd1a25caec2ae43ed747b7355caa4f5","expires_at":"2022-04-27T13:51:47.383+03:00"}}
* @responseBody 422 - Wrong auth token - {"meta":{"result":"WRONG_AUTH_TOKEN","error":{"message":"ERROR"}},"data":"null"}
*/

/**
* @logout
* @summary Logout
* @paramQuery refreshToken - RefreshToken
* @requestBody {"refreshToken": "a174d6a71982e3bab5b498ad24d1ee4db6ae9a6a56f7d86df097208f9f46eb07"}
* @responseBody 200 - Token refreshed - {"meta":{"result":"OK"},"data":true}
*/

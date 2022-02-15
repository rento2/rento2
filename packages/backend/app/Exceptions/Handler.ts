import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import creatingErrorMsg from 'App/Controllers/creatingErrorMsg'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor () {
    super(Logger)
  }

  public async handle (error: any, ctx: HttpContextContract): Promise<any> {
    if (error.code === 'E_VALIDATION_FAILURE') {
      return ctx.response.status(422)
        .send(creatingErrorMsg('VALIDATION_FAILURE', error.messages.errors))
    }

    return await super.handle(error, ctx)
  }
}

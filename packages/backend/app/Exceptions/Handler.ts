import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { creatingErrMsg } from '../../common/helpers/creatingResponse'
import { HttpStatusCode } from '../../common/constants/HttpStatusCode'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor () {
    super(Logger)
  }

  public async handle (error: any, ctx: HttpContextContract): Promise<any> {
    switch (error.code) {
      case 'E_VALIDATION_FAILURE':
        return ctx.response.status(HttpStatusCode.UnprocessableEntity)
          .send(creatingErrMsg('VALIDATION_FAILURE', error.messages.errors))

      case 'E_ROW_NOT_FOUND':
        return ctx.response.status(HttpStatusCode.NotFound)
          .send(creatingErrMsg('ENTITY_NOT_FOUND'))
    }

    return await super.handle(error, ctx)
  }
}

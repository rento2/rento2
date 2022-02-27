import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Orders'
import CreateOrderValidator from 'App/Validators/CreateOrderValidator'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg } from '../../../common/helpers/creatingResponse'
import { Apartment } from 'App/Models'

export default class OrdersController {
  public async index ({ response }: HttpContextContract): Promise<void> {
    const orderData = await Order.all()

    return response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', orderData))
  }

  public async show ({ request, response }: HttpContextContract): Promise<void> {
    const orderData = await Order.findBy('id', request.params()['id'])
    const id: number = request.params()['id']

    if (orderData !== null) {
      response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', orderData))
    } else {
      response.status(HttpStatusCode.UnprocessableEntity).send(creatingErrMsg('error', `Order with ${id} has not been found`))
    }
  }

  public async store ({ request, response }: HttpContextContract): Promise<void> {
    const { ...orderData } = request.body()

    const validatedRequest = await request.validate(CreateOrderValidator)
    const apartmentInfo = await Apartment.findBy('id', orderData['apartment_id'])

    if (apartmentInfo !== null) {
      const fixedPrice = apartmentInfo['$attributes']['price']
      const fixedTotalPrice = orderData['nights_number'] * fixedPrice

      orderData['fixed_price'] = fixedPrice
      orderData['fixed_total_price'] = fixedTotalPrice

      const order = await Order.create(orderData)

      response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', order))
    } else {
      response.status(HttpStatusCode.NotFound).send(creatingErrMsg('error', `Apartment with ${validatedRequest['apartment_id']} has not been found`))
    }

    // const orderResp = await Order.query().where('apartment_id', apartmentId).preload('apartments')
  }

  public async destroy ({ request, response }: HttpContextContract): Promise<any> {
    const orderData = await Order.findBy('id', request.params()['id'])
    const id: number = request.params()['id']

    const searchPayload = { id: request.params()['id'] }
    const persistancePayload = { soft_delete: true }

    if (orderData !== null) {
      await Order.updateOrCreate(searchPayload, persistancePayload)

      response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', null))
    } else {
      response.status(HttpStatusCode.NotFound).send(creatingErrMsg('error', `Order ${id} has not been found`))
    }
  }
}

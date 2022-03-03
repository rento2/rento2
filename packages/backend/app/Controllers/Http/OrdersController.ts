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
    const id: number = parseInt(request.param('id'), 10)
    if (!isNaN(id)) {
      const orderData = await Order.findBy('id', id)

      if (orderData != null) {
        return response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', orderData))
      } else {
        return response.status(HttpStatusCode.UnprocessableEntity).send(creatingErrMsg('error', `Order with ${id} has not been found`))
      }
    } else {
      return response.status(HttpStatusCode.UnprocessableEntity).send(creatingErrMsg('error', 'Enter valid id'))
    }
  }

  public async store ({ request, response }: HttpContextContract): Promise<void> {
    const { ...orderData } = request.body()

    const validatedRequest = await request.validate(CreateOrderValidator)
    const apartmentInfo = await Apartment.findBy('id', validatedRequest['apartment_id'])

    if (apartmentInfo != null) {
      const fixedPrice: number = apartmentInfo['$attributes']['price']
      const fixedTotalPrice: number = validatedRequest['nights_number'] * fixedPrice

      // const newOrder = new Order()
      // newOrder.fill(validatedRequest)

      orderData['fixed_price'] = fixedPrice
      orderData['fixed_total_price'] = fixedTotalPrice

      // await newOrder.save()

      const order = await Order.create(orderData)

      return response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', order))
    } else {
      return response.status(HttpStatusCode.NotFound).send(creatingErrMsg('error', `Apartment with ${validatedRequest['apartment_id']} has not been found`))
    }

    // const orderResp = await Order.query().where('apartment_id', apartmentId).preload('apartments')
  }

  public async destroy ({ request, response }: HttpContextContract): Promise<any> {
    const orderData = await Order.findBy('id', request.params()['id'])
    const id: number = parseInt(request.param('id'), 10)

    if (!isNaN(id)) {
      const searchPayload = { id: request.params()['id'] }
      const persistancePayload = { is_deleted: true }

      if (orderData != null) {
        await Order.updateOrCreate(searchPayload, persistancePayload)

        return response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', null))
      } else {
        return response.status(HttpStatusCode.NotFound).send(creatingErrMsg('error', `Order ${id} has not been found`))
      }
    } else {
      return response.status(HttpStatusCode.UnprocessableEntity).send(creatingErrMsg('error', 'Enter valid id'))
    }
  }
}

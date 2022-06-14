import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg, creatingPaginatedList } from '../../../common/helpers/creatingResponse'
import Order from 'App/Models/Order'
import CreateOrderValidator from 'App/Validators/OrderValidator'
import { schema } from '@ioc:Adonis/Core/Validator'
import { orderServices } from 'App/Services/OrderServices'

export default class OrdersController {
  public async list ({ response, request }: HttpContextContract): Promise<void> {
    const { search } = await request.validate({
      schema: schema.create({
        search: schema.string.optional()
      })
    })

    let orders = Order.query()
    if (search) {
      orders = orders
        .andWhere('name', 'ilike', `%${search}%`)
        .andWhere('email', 'ilike', `%${search}%`)
    }

    return response.status(HttpStatusCode.OK).send(
      creatingPaginatedList(
        await orders.paginate(request.param('page', 1))
      )
    )
  }

  public async one ({ response, request }: HttpContextContract): Promise<void> {
    const order = await Order.find(request.param('id', null))
    if (!order) {
      return response.status(HttpStatusCode.NotFound).send(creatingErrMsg('error', 'Order not found'))
    }

    await orderServices.notifyPayment(order)

    return response.status(HttpStatusCode.OK).send(creatingOkMsg(order))
  }

  public async update ({ response, request }: HttpContextContract): Promise<void> {
    const order = await Order.find(request.param('id', null))
    if (!order) {
      return response.send(creatingErrMsg('error', 'Order not found'))
    }

    const updatedOrder = await order.merge(
      await request.validate(CreateOrderValidator)
    ).save()

    return response.status(HttpStatusCode.OK).send(creatingOkMsg(updatedOrder))
  }

  public async create ({ request, response }: HttpContextContract): Promise<void> {
    const order = await Order.create(
      await request.validate(CreateOrderValidator)
    )

    return response
      .status(HttpStatusCode.Created)
      .send(creatingOkMsg(order))
  }

  public async delete ({ response, request }: HttpContextContract): Promise<any> {
    const order = await Order.findOrFail(request.param('id', null))
    await order.delete()

    return response.status(HttpStatusCode.OK).send(creatingOkMsg(order.id))
  }
}

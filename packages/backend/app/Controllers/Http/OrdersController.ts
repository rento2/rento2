import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg, creatingPaginatedList } from '../../../common/helpers/creatingResponse'
import Order from 'App/Models/Order'
import CreateOrderValidator from 'App/Validators/OrderValidator'
import { schema } from '@ioc:Adonis/Core/Validator'

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

/**
* @list
* @summary Gives the orders page.
* @responseBody 200 - <Order[]>
* @responseBody 200-0 - Empty apartment page - {"meta":{"result":"OK","pagination":{"perPage":20,"currentPage":44444444222241,"hasMorePages":false,"total":24}},"data":[]}
* @responseBody 401 - Not unauthorized - {"meta":{"result":"NOT_AUTHORIZED","error":{"message":"ERROR"}},"data":[]}
*/

/**
* @one
* @summary Gives the one order.
* @responseBody 200 - <Order>
* @responseBody 404 - Not Found - {"meta":{"result":"ENTITY_NOT_FOUND","error":{"message":"ERROR"}},"data":"null"}
* @responseBody 401 - Not unauthorized - {"meta":{"result":"NOT_AUTHORIZED","error":{"message":"ERROR"}},"data":"null"}
*/

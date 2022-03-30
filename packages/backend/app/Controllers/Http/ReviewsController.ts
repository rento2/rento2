import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg } from '../../../common/helpers/creatingResponse'
import Review from 'App/Models/Review'
import CreateReviewValidator from 'App/Validators/CreateReviewValidator'

export default class ReviewsController {
  public async list ({ response }: HttpContextContract): Promise<void> {
    return response
      .status(HttpStatusCode.OK)
      .send(creatingOkMsg('OK', await Review.query().preload('apartment')))
  }

  public async one ({ response, request }: HttpContextContract): Promise<void> {
    const review = await Review.find(request.param('id', null))
    if (!review) {
      return response.send(creatingErrMsg('error', 'Review not found'))
    }

    return response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', review))
  }

  public async create ({ request, response }: HttpContextContract): Promise<void> {
    const { payload } = request.body()

    await request.validate(CreateReviewValidator)
    const review = await Review.create({
      ...payload,
      isApproved: false,
    })

    return response
      .status(HttpStatusCode.Created)
      .send(creatingOkMsg('Review created', review))
  }

  public async delete ({ response, request }: HttpContextContract): Promise<any> {
    const review = await Review.find(request.param('id', null))
    if (!review) {
      return response.status(HttpStatusCode.NotFound).send(creatingErrMsg('error', 'Review not found'))
    }

    await review.delete()
    return response.status(HttpStatusCode.OK).send(creatingOkMsg('OK', review.id))
  }
}

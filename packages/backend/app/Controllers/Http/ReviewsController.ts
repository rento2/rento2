import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpStatusCode } from '../../../common/constants/HttpStatusCode'
import { creatingErrMsg, creatingOkMsg, creatingPaginatedList } from '../../../common/helpers/creatingResponse'
import Review from 'App/Models/Review'
import CreateReviewValidator from 'App/Validators/ReviewValidator'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class ReviewsController {
  public async list ({ response, request }: HttpContextContract): Promise<void> {
    const { search } = await request.validate({
      schema: schema.create({
        search: schema.string.optional()
      })
    })

    let reviews = Review.query().preload('apartment')
    if (search) {
      reviews = reviews
        .andWhere('author', 'ilike', `%${search}%`)
    }

    return response
      .status(HttpStatusCode.OK).send(
        creatingPaginatedList(
          await reviews.paginate(request.param('page', 1))
        )
      )
  }

  public async one ({ response, request }: HttpContextContract): Promise<void> {
    const review = await Review.find(request.param('id', null))
    if (!review) {
      return response.status(HttpStatusCode.NotFound).send(creatingErrMsg('error', 'Review not found'))
    }

    return response.status(HttpStatusCode.OK).send(creatingOkMsg(review))
  }

  public async update ({ response, request }: HttpContextContract): Promise<void> {
    const review = await Review.find(request.param('id', null))
    if (!review) {
      return response.send(creatingErrMsg('error', 'Review not found'))
    }

    const updatedReview = await review.merge(
      await request.validate(CreateReviewValidator)
    ).save()

    return response.status(HttpStatusCode.OK).send(creatingOkMsg(updatedReview))
  }

  public async create ({ request, response }: HttpContextContract): Promise<void> {
    const review = await Review.create({
      ...(await request.validate(CreateReviewValidator)),
      isApproved: false,
    })

    return response
      .status(HttpStatusCode.Created)
      .send(creatingOkMsg(review))
  }

  public async delete ({ response, request }: HttpContextContract): Promise<any> {
    const review = await Review.find(request.param('id', null))
    if (!review) {
      return response.send(creatingErrMsg('error', 'Review not found'))
    }

    await review.delete()
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(review.id))
  }
}

/**
* @list
* @summary Gives the reviews page.
* @responseBody 200 - <Review[]>
* @responseBody 200-0 - Empty apartment page - {"meta":{"result":"OK","pagination":{"perPage":20,"currentPage":44444444222241,"hasMorePages":false,"total":24}},"data":[]}
* @responseBody 401 - Not unauthorized - {"meta":{"result":"NOT_AUTHORIZED","error":{"message":"ERROR"}},"data":[]}
*/

/**
* @one
* @summary Gives the one review.
* @responseBody 200 - <Review>
* @responseBody 404 - Not Found - {"meta":{"result":"ENTITY_NOT_FOUND","error":{"message":"ERROR"}},"data":"null"}
* @responseBody 401 - Not unauthorized - {"meta":{"result":"NOT_AUTHORIZED","error":{"message":"ERROR"}},"data":"null"}
*/

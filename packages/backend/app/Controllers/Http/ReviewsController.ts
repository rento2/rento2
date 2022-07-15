import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { HttpStatusCode } from "../../../common/constants/HttpStatusCode";
import {
  creatingErrMsg,
  creatingOkMsg,
  creatingPaginatedList,
} from "../../../common/helpers/creatingResponse";
import Review from "App/Models/Review";
import CreateReviewValidator from "App/Validators/ReviewValidator";
import { schema } from "@ioc:Adonis/Core/Validator";
import Apartment from "App/Models/Apartment";

export default class ReviewsController {
  public async list({ response, request }: HttpContextContract): Promise<void> {
    const { sortDirection } = request.qs();
    const { search } = await request.validate({
      schema: schema.create({
        search: schema.string.optional(),
      }),
    });

    let reviews = Review.query().preload("apartment", (apartmentQuery) => {
      apartmentQuery.preload("photos");
    });
    if (search) {
      reviews = reviews.andWhere("author", "ilike", `%${search}%`);
    }

    return response
      .status(HttpStatusCode.OK)
      .send(
        creatingPaginatedList(
          await reviews
            .orderBy("createdAt", sortDirection === "asc" ? "asc" : "desc")
            .paginate(request.param("page", 1))
        )
      );
  }

  public async one({ response, request }: HttpContextContract): Promise<void> {
    const review = await Review.find(request.param("id", null));

    if (!review) {
      return response
        .status(HttpStatusCode.NotFound)
        .send(creatingErrMsg("error", "Review not found"));
    }

    const apartment = await Apartment.query()
      .preload("photos")
      .where("id", review.apartmentId)
      .first();

    let apartmenBody = {};

    if (apartment) {
      const photos = apartment.photos.map(
        (photo) => `${photo.link}${photo.path}`
      );
      apartmenBody = {
        name: apartment.name,
        photos,
      };
    }

    return response
      .status(HttpStatusCode.OK)
      .send(creatingOkMsg({ review, apartment: apartmenBody }));
  }

  public async update({
    response,
    request,
  }: HttpContextContract): Promise<void> {
    const review = await Review.find(request.param("id", null));
    if (!review) {
      return response.send(creatingErrMsg("error", "Review not found"));
    }

    const updatedReview = await review
      .merge(await request.validate(CreateReviewValidator))
      .save();

    return response
      .status(HttpStatusCode.OK)
      .send(creatingOkMsg(updatedReview));
  }

  public async create({
    request,
    response,
  }: HttpContextContract): Promise<void> {
    const review = await Review.create({
      ...(await request.validate(CreateReviewValidator)),
      isApproved: false,
    });

    return response.status(HttpStatusCode.Created).send(creatingOkMsg(review));
  }

  public async delete({
    response,
    request,
  }: HttpContextContract): Promise<any> {
    const review = await Review.find(request.param("id", null));
    if (!review) {
      return response.send(creatingErrMsg("error", "Review not found"));
    }

    await review.delete();
    return response.status(HttpStatusCode.OK).send(creatingOkMsg(review.id));
  }
}

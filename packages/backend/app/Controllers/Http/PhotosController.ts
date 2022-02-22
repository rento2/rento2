import Photo from 'App/Models/Photo'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PhotosController {
  public async index ({ response }: HttpContextContract): Promise<void> {
    const photos = await Photo.all()

    return response.send({
      meta: {},
      data: { photos }
    })
  }

  public async store ({
    request,
    response
  }: HttpContextContract): Promise<void> {
    const photos = await Photo.create(request.body())

    return response.send({
      meta: {},
      data: { photos }
    })
  }

  public async show ({ params, response }: HttpContextContract): Promise<void> {
    const photos = await Photo.findBy('id', params['id'])

    return response.send({
      meta: {},
      data: { photos }
    })
  }

  public async update ({
    params,
    request,
    response
  }: HttpContextContract): Promise<void> {
    const photos = await Photo.findBy('id', params['id'])

    if (photos != null) {
      await photos.merge(request.body()).save()
    }

    return response.send({
      meta: {},
      data: { photos }
    })
  }

  public async destroy ({
    params,
    response
  }: HttpContextContract): Promise<void> {
    const photos = await Photo.findBy('id', params['id'])
    if (photos != null) {
      await photos.delete()
    }

    return response.send({
      meta: {},
      data: { photos }
    })
  }
}

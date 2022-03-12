import Application from '@ioc:Adonis/Core/Application'
import { schema } from '@ioc:Adonis/Core/Validator'
import Drive from '@ioc:Adonis/Core/Drive'
import Photo from 'App/Models/Photo'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

const photoSchema = schema.create({
  image: schema.file({
    size: '2mb',
    extnames: ['jpg']
  })
})

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
    const uploadPicture = await request.validate({ schema: photoSchema })

    const photos = await Photo.create(request.body())

    await uploadPicture.image.moveToDisk(
      Application.tmpPath('uploads'),
      {
        name: `${photos.id}.${uploadPicture.image.extname ?? 'jpg'}`,
        overwrite: true
      },
      'local'
    )

    const fileName = uploadPicture.image.fileName

    return response.send({
      meta: { upload: fileName },
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
    const uploadPicture = await request.validate({ schema: photoSchema })

    const photos = await Photo.findBy('id', params['id'])

    if (photos != null) {
      await photos.merge(request.body()).save()

      await uploadPicture.image.moveToDisk(
        Application.tmpPath('uploads'),
        {
          name: `${photos.id}.${uploadPicture.image.extname ?? 'jpg'}`,
          overwrite: true
        },
        'local'
      )
    }

    const fileName = uploadPicture.image.fileName

    return response.send({
      meta: { update: fileName },
      data: { photos }
    })
  }

  public async destroy ({
    params,
    response
  }: HttpContextContract): Promise<void> {
    const photos = await Photo.findBy('id', params['id'])
    if (photos != null) {
      await Drive.delete(`${photos.id}.jpg`)
      await photos.delete()
    }

    return response.send({
      meta: {},
      data: { photos }
    })
  }
}

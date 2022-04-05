import Application from '@ioc:Adonis/Core/Application'
import { schema } from '@ioc:Adonis/Core/Validator'
import Drive from '@ioc:Adonis/Core/Drive'
import Photo from 'App/Models/Photo'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
/* eslint-disable @typescript-eslint/no-var-requires */
const { v4: uuidv4 } = require('uuid')
const tmpPath = Application.tmpPath('uploads')

const photoSchema = schema.create({
  image: schema.file({
    size: '2mb',
    extnames: ['webp', 'jpg', 'jpeg', 'gif', 'png', 'svg'],
  }),
})

export default class PhotosController {
  public async index ({ response, logger }: HttpContextContract): Promise<void> {
    const photos = await Photo.all()

    try {
      return response.send({
        meta: {},
        data: { photos },
      })
    } catch (e: unknown) {
      if (e instanceof Error) {
        logger.error(e.message)
        return response.internalServerError()
      }
    }
  }

  public async store ({
    request,
    response,
    logger,
  }: HttpContextContract): Promise<void> {
    const pictureToUpload = await request.validate({ schema: photoSchema })

    try {
      const uuid: string = uuidv4()
      const extName = pictureToUpload.image.extname
      console.log(request)

      if (extName != null) {
        const filename = `${uuid}.${extName}`

        await pictureToUpload.image.moveToDisk(
          tmpPath,
          { name: filename, overwrite: true },
          'local'
        )

        const photo = await Photo.create({
          link: tmpPath + '/' + filename,
          apartment_id: request.body()['apartment_id'],
        })

        return response.send({
          meta: {},
          data: { photo },
        })
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        logger.error(e.message)
        return response.internalServerError()
      }
    }
  }

  public async show ({
    params,
    response,
    logger,
  }: HttpContextContract): Promise<void> {
    try {
      const photo = await Photo.findBy('id', params['id'])

      if (photo != null) {
        return response.ok({
          meta: {},
          data: { photo },
        })
      } else {
        return response.notFound({ message: 'Photo not found' })
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        logger.error(e.message)
        return response.internalServerError()
      }
    }
  }

  public async update ({
    params,
    request,
    response,
    logger,
  }: HttpContextContract): Promise<void> {
    // const uploadPicture = await request.validate({ schema: photoSchema });

    try {
      const photo = await Photo.findBy('id', params['id'])

      if (photo != null) {
        await photo.merge(request.body()).save()

        return response.ok({
          meta: {},
          data: { photo },
        })
      } else {
        return response.notFound({ message: 'Photo not found' })
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        logger.error(e.message)
        return response.internalServerError()
      }
    }
  }

  public async destroy ({
    params,
    response,
    logger,
  }: HttpContextContract): Promise<void> {
    try {
      const photo = await Photo.findBy('id', params['id'])

      if (photo != null) {
        await Drive.delete(`${photo.id}.jpg`)
        await photo.delete()

        return response.noContent()
      } else {
        return response.notFound({ message: 'Photo not found' })
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        logger.error(e.message)
        return response.internalServerError()
      }
    }
  }
}

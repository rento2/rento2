import { photoSchema } from './../../Validators/PhotoValidator'
import { HttpStatusCode } from './../../../common/constants/HttpStatusCode'
import Application from '@ioc:Adonis/Core/Application'
import Drive from '@ioc:Adonis/Core/Drive'
import Photo from 'App/Models/Photo'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {
  creatingOkMsg,
  creatingErrMsg,
} from '../../../common/helpers/creatingResponse'
/* eslint-disable @typescript-eslint/no-var-requires */
const { v4: uuidv4 } = require('uuid')
const tmpPath = Application.tmpPath('uploads')

export default class PhotosController {
  public async index ({ response }: HttpContextContract): Promise<void> {
    const photos = await Photo.all()

    try {
      return response.status(HttpStatusCode.OK).send(creatingOkMsg(photos))
    } catch (e: unknown) {
      if (e instanceof Error) {
        return response.send(creatingErrMsg('error', e.message))
      }
    }
  }

  public async store ({
    request,
    response,
  }: HttpContextContract): Promise<void> {
    const pictureToUpload = await request.validate({ schema: photoSchema })
    const apartmentId = request.body()['apartment_id']
    try {
      const uuid: string = uuidv4()
      const extName = pictureToUpload.image.extname

      if (extName != null) {
        const filename = `${uuid}.${extName}`

        await pictureToUpload.image.moveToDisk(
          tmpPath,
          { name: filename, overwrite: true },
          'local'
        )

        const photo = await Photo.create({
          link: tmpPath + '/' + filename,
          apartment_id: apartmentId,
        })

        return response.status(HttpStatusCode.OK).send(creatingOkMsg(photo))
      }
      return response.send(creatingErrMsg('error', 'Wrong file type'))
    } catch (e: unknown) {
      if (e instanceof Error) {
        return response.send(creatingErrMsg('error', e.message))
      }
    }
  }

  public async show ({ params, response }: HttpContextContract): Promise<void> {
    try {
      const photo = await Photo.findBy('id', params['id'])

      if (photo != null) {
        return response.status(HttpStatusCode.OK).send(creatingOkMsg(photo))
      } else {
        return response.send(creatingErrMsg('error', 'Photo not found'))
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        return response.send(creatingErrMsg('error', e.message))
      }
    }
  }

  public async update ({
    params,
    request,
    response,
  }: HttpContextContract): Promise<void> {
    try {
      const photo = await Photo.findBy('id', params['id'])

      if (photo != null) {
        await photo.merge(request.body()).save()

        return response.status(HttpStatusCode.OK).send(creatingOkMsg(photo))
      } else {
        return response.send(creatingErrMsg('error', 'Photo not found'))
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        return response.send(creatingErrMsg('error', e.message))
      }
    }
  }

  public async destroy ({
    params,
    response,
  }: HttpContextContract): Promise<void> {
    try {
      const photo = await Photo.findBy('id', params['id'])

      if (photo != null) {
        await Drive.delete(`${photo.id}.jpg`)
        await photo.delete()

        return response.status(HttpStatusCode.OK).send(creatingOkMsg(photo))
      } else {
        return response.send(creatingErrMsg('error', 'Photo not found'))
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        return response.send(creatingErrMsg('error', e.message))
      }
    }
  }
}

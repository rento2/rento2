import PhotoValidator from './../../Validators/PhotoValidator'
import { HttpStatusCode } from './../../../common/constants/HttpStatusCode'
import Drive from '@ioc:Adonis/Core/Drive'
import Photo from 'App/Models/Photo'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {
  creatingOkMsg,
  creatingErrMsg,
  creatingPaginatedList,
} from '../../../common/helpers/creatingResponse'
import { v4 as uuidv4 } from 'uuid'

export default class PhotosController {
  public async list ({ response, request }: HttpContextContract): Promise<void> {
    return response.status(HttpStatusCode.OK).send(
      creatingPaginatedList(
        await Photo.query().paginate(request.param('page', 1))
      )
    )
  }

  public async create ({
    request,
    response,
  }: HttpContextContract): Promise<void> {
    const { image, apartmentId } = await request.validate(PhotoValidator)

    const uploadedPhotoIdentifier = uuidv4()
    const uploadedPhotoExtension = image.extname
    const uploadedCellPath = uploadedPhotoIdentifier.split('-').join('/')

    if (!uploadedPhotoExtension) {
      return response.send(
        creatingErrMsg('UNABLE_TO_PARSE_EXTENSION', 'File must have an extension')
      )
    }

    await image.moveToDisk(uploadedCellPath, {
      name: `${uploadedPhotoIdentifier}.${uploadedPhotoExtension}`,
      visibility: 'public',
    }, 's3')

    const s3Filepath = `${uploadedCellPath}/${uploadedPhotoIdentifier}.${uploadedPhotoExtension}`
    const photo = await Photo.create({
      link: await Drive.getUrl(s3Filepath),
      path: s3Filepath,
      apartmentId,
    })

    return response.status(HttpStatusCode.OK).send(creatingOkMsg(photo))
  }

  public async one ({ response, request }: HttpContextContract): Promise<void> {
    const photo = await Photo.findOrFail(request.param('id', null))

    return response.status(HttpStatusCode.OK)
      .send(creatingOkMsg(photo))
  }

  public async delete ({ response, request }: HttpContextContract): Promise<any> {
    const photo = await Photo.findOrFail(request.param('id', null))

    await Promise.all([
      photo.delete(),
      Drive.delete(photo.path)
    ])

    return response.status(HttpStatusCode.OK)
      .send(creatingOkMsg(photo.id))
  }
}

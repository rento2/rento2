import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export interface IResponse {
  meta: string
  data?: any
}

export default class PhotosController {
  public async index (): Promise<IResponse> {
    return {
      meta: 'get all photos',
      data: 'PhotosController response'
    }
  }

  public async store (): Promise<IResponse> {
    return {
      meta: 'photo create',
      data: 'PhotosController response'
    }
  }

  public async show ({ params }: HttpContextContract): Promise<IResponse> {
    const id: string = params['id']
    return {
      meta: `show photo ${id}`,
      data: 'PhotosController response'
    }
  }

  public async update ({ params }: HttpContextContract): Promise<IResponse> {
    const id: string = params['id']
    return {
      meta: `update photo ${id}`,
      data: 'PhotosController response'
    }
  }

  public async destroy ({ params }: HttpContextContract): Promise<IResponse> {
    const id: string = params['id']
    return {
      meta: `delete photo ${id}`,
      data: 'PhotosController response'
    }
  }
}

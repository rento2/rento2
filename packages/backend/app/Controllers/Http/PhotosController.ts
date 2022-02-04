import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export interface IResponse {
  meta: Record<string, any>
  data?: any
}

export default class PhotosController {
  public async index (): Promise<IResponse> {
    return {
      meta: { return: 'get all photos' },
      data: 'PhotosController response'
    }
  }

  public async store (): Promise<IResponse> {
    return {
      meta: { return: 'photo create' },
      data: 'PhotosController response'
    }
  }

  public async show ({ params }: HttpContextContract): Promise<IResponse> {
    const id: string = params['id']
    return {
      meta: { return: `show photo ${id}` },
      data: 'PhotosController response'
    }
  }

  public async update ({ params }: HttpContextContract): Promise<IResponse> {
    const id: string = params['id']
    return {
      meta: { return: `update photo ${id}` },
      data: 'PhotosController response'
    }
  }

  public async destroy ({ params }: HttpContextContract): Promise<IResponse> {
    const id: string = params['id']
    return {
      meta: { return: `delete photo ${id}` },
      data: 'PhotosController response'
    }
  }
}

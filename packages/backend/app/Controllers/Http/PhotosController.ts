import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class PhotosController {
  public async index (): Promise<[{}]> {
    return [
      {
        'Show photos': 'get all photos'
      }
    ]
  }

  public async create (): Promise<[{}]> {
    return [
      {
        'Show photos': 'Displaying the photo create page'
      }
    ]
  }

  public async store (): Promise<[{}]> {
    return [
      {
        'Show photos': 'photo create'
      }
    ]
  }

  public async show ({ params }: HttpContextContract): Promise<[{}]> {
    const id: string = params['id']
    return [
      {
        'Show photos': `show photo ${id}`
      }
    ]
  }

  public async edit ({ params }: HttpContextContract): Promise<[{}]> {
    const id: string = params['id']
    return [
      {
        'Show photos': `Displaying the photo update page for photo ${id}`
      }
    ]
  }

  public async update ({ params }: HttpContextContract): Promise<[{}]> {
    const id: string = params['id']
    return [
      {
        'Show photos': `update photo ${id}`
      }
    ]
  }

  public async destroy ({ params }: HttpContextContract): Promise<[{}]> {
    const id: string = params['id']
    return [
      {
        'Show photos': `delete photo ${id}`
      }
    ]
  }
}

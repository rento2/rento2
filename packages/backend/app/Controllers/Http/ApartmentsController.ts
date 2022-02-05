import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Apartment from 'App/Models/Apartment'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ApartmentsController {
  public async index ({ response }: HttpContextContract): Promise<void> {
    const apartments = await Apartment.all()

    return response.json({
      meta: {},
      data: { apartments }
    })
  }

  public async show ({ request, response }: HttpContextContract): Promise<void> {
    const apartment = await Apartment.findByOrFail('id', request.params()['id'])

    return response.json({
      meta: {},
      data: { apartment }
    })
  }

  public async store ({ request, response }: HttpContextContract): Promise<void> {
    const apartment = await Database.insertQuery<Apartment>().table('apartments').insert(request.body())

    return response.json({
      meta: {},
      data: { apartment }
    })
  }

  public async destroy ({ request, response }: HttpContextContract): Promise<any> {
    const apartment = await Database.from('apartments').where('id', request.params()['id']).delete()
    console.log(apartment)

    return response.json(
      {
        meta: { deleted: apartment },
        data: {}
      })
  }
}

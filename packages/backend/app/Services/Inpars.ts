import { buildUrl, IQueryParams } from 'build-url-ts'
import inparsConfiguration from 'Config/inpars'
import axios from 'axios'
import { Exception } from '@adonisjs/core/build/standalone'
import { DateTime } from 'luxon'

export enum RequestMethod {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
}

export interface IEstate {
  id: number
  source: string
  images: string[]
  title: string
  text: string
  lat: string
  lng: string
  name: string
  floor: number
  floors: number
  sq: number
  cost: number
  metroId: number

  created: DateTime
}

export interface IEstateResponse {
  data: IEstate[]
  nextPage: number | null
}

export default class Inpars {
  protected readonly config: typeof inparsConfiguration
  public readonly paginationPerPage: number

  constructor () {
    this.config = inparsConfiguration
    this.paginationPerPage = 50
  }

  protected request = async (
    method: RequestMethod,
    path: string,
    queryParams: IQueryParams = {},
    body: Record<string, any> = {}
  ): Promise<any> => {
    const url = buildUrl('https://inpars.ru/api/v2', {
      path,
      queryParams: {
        ...queryParams,
        'access-token': this.config.accessToken,
      }
    })

    const output = (await axios[method](url, body, {
      headers: {
        Accept: 'application/json'
      }
    }))
    if (output.status !== 200) {
      throw new Exception(`Inpars api exception, ${output.status}`)
    }

    return output.data
  }

  public listEstate = async (lastId: number = 0): Promise<IEstateResponse> => {
    const { data } = await this.request(RequestMethod.GET, '/estate', {
      limit: this.paginationPerPage,
      sortBy: 'id_asc',
      cityId: 1,
      typeAd: 1,
      withPhoto: 1,
      lastId,
    })
    let nextPage = null

    if (data.length >= this.paginationPerPage) {
      nextPage = data[data.length - 1].id
    }

    return { data, nextPage }
  }
}

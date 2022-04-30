import { buildUrl, IQueryParams } from 'build-url-ts'
import bnovoConfiguration from 'Config/bnovo'
import axios from 'axios'
import Redis from '@ioc:Adonis/Addons/Redis'
import { Exception } from '@adonisjs/core/build/standalone'

export enum RequestMethod {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
}

export default class Bnovo {
  protected readonly config: typeof bnovoConfiguration
  constructor () {
    this.config = bnovoConfiguration
  }

  protected formatDate = (date: Date): string => {
    return [date.getDay(), date.getMonth(), date.getFullYear()].join('-')
  }

  protected request = async (
    method: RequestMethod,
    path: string,
    queryParams: IQueryParams = {},
    body: Record<string, any> = {}
  ): Promise<any> => {
    const url = buildUrl(this.config.privateUrl, {
      path, queryParams
    })

    const output = (await axios[method](url, body))
    if (output.status !== 200) {
      throw new Exception('Bnovo api returned bad response')
    }

    return output.data
  }

  protected getAuthToken = async (): Promise<any> => {
    const token = await Redis.get('tokenBnovo')

    if (!token) {
      const { token: renewedToken } = await this.request(RequestMethod.POST, '/v1/api/auth', {}, {
        username: this.config.username,
        password: this.config.password,
      })
      await Redis.set('tokenBnovo', renewedToken)
      return renewedToken
    }

    return token
  }

  protected getAllApartments = async (): Promise<any> => {
    const token = await this.getAuthToken()

    const response = await this.request(RequestMethod.GET, '/v1/api/roomtypes', {
      token, account_id: this.config.accountId,
    })

    return response.roomtypes
  }

  protected getOneApartment = async (targetApartment: number, from?: Date, to?: Date): Promise<any> => {
    const token = await this.getAuthToken()
    const response = await this.request(
      RequestMethod.GET,
      `/v1/api/roomtypes/${targetApartment}`,
      {
        token,
        account_id: this.config.accountId,
        dfrom: from ? this.formatDate(from) : null,
        dto: to ? this.formatDate(to) : null,
        plan_id: this.config.planId,
      }
    )

    if (from && to) {
      const pricesResponse = await this.request(
        RequestMethod.GET,
        `/v1/api/prices/${targetApartment}`, {
          token,
          account_id: this.config.accountId,
          dfrom: this.formatDate(from),
          dto: this.formatDate(to),
          plan_id: this.config.planId,
        }
      )
      const pricesList =
        pricesResponse.prices[targetApartment]
          .reduce((prev: number, curr: any) => prev + (curr.price as number), 0)
      response.roomtype.price = pricesList / pricesResponse.prices[targetApartment].length
    }

    return response.roomtype
  }

  protected getPriceOnDateRange = async (targetApartment: number, from: Date, to: Date): Promise<any> => {
    const token = await this.getAuthToken()

    const pricesResponse = await this.request(
      RequestMethod.GET,
      `/v1/api/prices/${targetApartment}`, {
        token,
        account_id: this.config.accountId,
        dfrom: this.formatDate(from),
        dto: this.formatDate(to),
        plan_id: this.config.planId,
      }
    )

    return pricesResponse.plans_data[this.config.planId][targetApartment]
  }

  protected getAvailability = async (from: Date, to: Date): Promise<any> => {
    const token = await this.getAuthToken()

    const response = await this.request(
      RequestMethod.GET,
      '/v1/api/availability', {
        token,
        account_id: this.config.accountId,
        dfrom: this.formatDate(from),
        dto: this.formatDate(to),
      }
    )

    return response
  }

  protected cancelBookApartment = async (bookingNumber: string, email: string): Promise<any> => {
    const token = await this.getAuthToken()

    const response = await this.request(
      RequestMethod.DELETE,
      '/v1/api/bookings', {
        token,
        email,
        account_id: this.config.accountId,
        booking_number: bookingNumber,
      }
    )

    return response
  }

  protected bookApartment = async (from: Date, to: Date, apartmentId: number, payload: {
    name: string
    surname: string
    email: string
    phone: string
  }): Promise<any> => {
    const token = await this.getAuthToken()
    const data = {
      token,
      account_id: this.config.accountId,
      booking_json: JSON.stringify({
        plan_id: this.config.planId,
        warranty_type: 'no',
        arrival: this.formatDate(from),
        departure: this.formatDate(to),
        name: payload.name,
        surname: payload.surname,
        email: payload.email,
        phone: payload.phone,
        lang: 'ru',
        room_types: {
          [apartmentId]: {
            count: 1,
            prices: this.getPriceOnDateRange(apartmentId, from, to),
            room_type_services: [[]]
          }
        }
      })
    }

    const response = await this.request(
      RequestMethod.POST,
      '/v1/api/bookings', {}, data
    )

    return response
  }

  protected getAllApartmentsPublicApi = async (from: Date, to: Date): Promise<any> => {
    const url = buildUrl('https://public-api.reservationsteps.ru', {
      path: '/v1/api/rooms/',
      queryParams: {
        account_id: this.config.accountId,
        dfrom: this.formatDate(from),
        dto: this.formatDate(to),
      }
    })

    const output = await axios.get(url)
    if (output.status !== 200) {
      throw new Exception('Api returned bad response')
    }

    return output.data
  }
}

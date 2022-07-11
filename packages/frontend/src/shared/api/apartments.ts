import { AxiosResponse } from 'axios'
import axios from './axios'
import { APARTMENTS_LIST, APARTMENTS_ONE } from './endpoints'
import { IApartmentsListResponse, IApartmentsOneResponse } from './typesApi'

const getApartmentsList = async (page = '1', fields?: string): Promise<AxiosResponse<IApartmentsListResponse>> => await axios.get(`${APARTMENTS_LIST}/${page}`, {
  params: {
    fields: fields
  }
})

const getApartmentsOne = async (id: string, fields?: string): Promise<AxiosResponse<IApartmentsOneResponse>> => await axios.get(`${APARTMENTS_ONE}/${id}`, {
  params: {
    fields: fields
  }
})

export {
  getApartmentsList,
  getApartmentsOne
}

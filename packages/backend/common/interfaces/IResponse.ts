import { LucidRow } from '@ioc:Adonis/Lucid/Orm'

export interface INegativeResponse {
  meta: {
    result: string
    error: {
      message: string
    }
  }
  data: null
}

export interface IPositiveResponse<T> {
  meta: {
    result: string
  }
  data: T | []
}

export interface IPaginatedResponse {
  meta: {
    result: string
    pagination: {
      perPage: number
      currentPage: number
      hasMorePages: boolean
      total: number
    }
  }
  data: LucidRow[]
}

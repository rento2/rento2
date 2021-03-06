import { ModelPaginatorContract, LucidRow } from '@ioc:Adonis/Lucid/Orm'
import { INegativeResponse, IPaginatedResponse, IPositiveResponse } from '../interfaces/IResponse'

export function creatingErrMsg (type: string, message: string = 'ERROR'): INegativeResponse {
  return {
    meta: {
      result: type,
      error: {
        message,
      }
    },
    data: null
  }
}

export function creatingOkMsg<U> (data: U, message: string = 'OK'): IPositiveResponse<U> {
  return {
    meta: {
      result: message
    },
    data: data === null ? [] : data
  }
}

export function creatingPaginatedList<T extends LucidRow> (paginatedResults: ModelPaginatorContract<T>, additionals: Record<string, unknown> | null = null): IPaginatedResponse {
  const { perPage, currentPage, hasMorePages, total } = paginatedResults

  return {
    meta: {
      result: 'OK',
      pagination: {
        perPage, currentPage, hasMorePages, total
      },
    },
    data: {
      items: paginatedResults.all(),
      additionals,
    },
  }
}

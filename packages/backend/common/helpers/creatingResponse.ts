import { INegativeResponse, IPositiveResponse } from '../interfaces/IResponse'

export function creatingErrMsg (type: string, message: string): INegativeResponse {
  return {
    meta: {
      result: type,
      error: {
        message: message
      }
    },
    data: null
  }
}

export function creatingOkMsg<U> (message: string, data: U): IPositiveResponse<U> {
  return {
    meta: {
      result: message
    },
    data: data === null ? [] : data
  }
}

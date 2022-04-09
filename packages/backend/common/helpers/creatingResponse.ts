import { INegativeResponse, IPositiveResponse } from '../interfaces/IResponse'

export function creatingErrMsg (type: string, message: string = 'ERROR'): INegativeResponse {
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

export function creatingOkMsg<U> (data: U, message: string = 'OK'): IPositiveResponse<U> {
  return {
    meta: {
      result: message
    },
    data: data === null ? [] : data
  }
}

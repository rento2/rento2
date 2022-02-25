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

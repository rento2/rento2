export interface PositiveResponseInt<T> {
  meta: {
    result: string
  }
  data: T | []
}

import { PositiveResponseInt } from '../../common/interfaces/positive-response-int'

export default function creatingOkMsg<U> (data: U): PositiveResponseInt<U> {
  return {
    meta: {
      result: 'OK'
    },
    data: data
  }
}

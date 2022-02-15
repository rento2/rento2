import { NegativeResponseInt } from '../../common/interfaces/negative-response-int'

export default function creatingErrorMsg (type: string, message: string): NegativeResponseInt {
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

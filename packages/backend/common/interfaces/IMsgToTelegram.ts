import { IPaidOrder } from './IPaidOrder'

export interface IMsgToTelegram extends IPaidOrder{
  paymentUrl: string
}

import {
  creatingErrMsg,
  creatingOkMsg,
} from '../../common/helpers/creatingResponse'
import {
  IPositiveResponse,
  INegativeResponse,
} from './../../common/interfaces/IResponse'
import Logger from '@ioc:Adonis/Core/Logger'
import TelegramBot from 'App/Services/Telegram'
import Bnovo from 'App/Services/Bnovo'
import { IPaidOrder } from '../../common/interfaces/IPaidOrder'

export default class OrderService {
  bnovo
  telegramBot
  constructor () {
    this.bnovo = new Bnovo()
    this.telegramBot = new TelegramBot()
  }

  public async notifyPayment (
    paidOrder: IPaidOrder
  ): Promise<INegativeResponse | IPositiveResponse<IPaidOrder>> {
    try {
      const response = await this.bnovo.bookApartment(
        paidOrder.dateFrom,
        paidOrder.dateTo,
        paidOrder.apartmentId,
        paidOrder.prices,
        paidOrder.payload
      )

      if (response) {
        await this.telegramBot.sendMsgToTelegram(
          paidOrder.id,
          paidOrder.apartmentAddress,
          paidOrder.dateFrom,
          paidOrder.dateTo,
          paidOrder.fixedTotalPrice,
          paidOrder.payload.name,
          paidOrder.payload.phone,
          response.paymentUrl
        )
      }
      return creatingOkMsg(paidOrder)
    } catch (err) {
      const error = err as Error
      Logger.error(`Order '${paidOrder.id}' not registered in Bnovo`)
      return creatingErrMsg('Failed bnovo response.', error.message)
    }
  }
}

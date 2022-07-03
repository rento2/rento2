import util from 'util'
import {
  creatingErrMsg,
  creatingOkMsg,
} from '../../common/helpers/creatingResponse'
import {
  IPositiveResponse,
  INegativeResponse,
} from '../../common/interfaces/IResponse'
import Logger from '@ioc:Adonis/Core/Logger'
import TelegramBot from 'App/Services/TelegramBot'
import Bnovo from 'App/Services/Bnovo'
import { IPaidOrder } from '../../common/interfaces/IPaidOrder'

export default class OrderService {
  constructor (private readonly bnovo: Bnovo, private readonly telegramBot: TelegramBot) {
    this.bnovo = new Bnovo()
    this.telegramBot = new TelegramBot()
  }

  public async sendBookingNotification (
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

      if (response.bookings) {
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
        return creatingOkMsg(paidOrder)
      } else {
        Logger.error(`Order '${paidOrder.id}': failed to book (${paidOrder.apartmentAddress}) in Bnovo, Bnovo response: '${util.inspect(response)}'`)
        return creatingErrMsg('error.', `failed to book (${paidOrder.apartmentAddress}) in Bnovo`)
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        Logger.error(`Order '${paidOrder.id}': failed to book (${paidOrder.apartmentAddress}) in Bnovo, error: '${err.message}'`)
        return creatingErrMsg('error.', `failed to book (${paidOrder.apartmentAddress}) in Bnovo`)
      }
      Logger.error(`Order '${paidOrder.id}': failed to book (${paidOrder.apartmentAddress}) in Bnovo, unknown error: '${util.inspect(err)}'`)
      return creatingErrMsg('unknown error.', `failed to book (${paidOrder.apartmentAddress}) in Bnovo`)
    }
  }
}

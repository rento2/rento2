import axios from 'axios'
import { DateTime } from 'luxon'

import util from 'util'
import { IMsgToTelegram } from './../../common/interfaces/IMsgToTelegram'
import Logger from '@ioc:Adonis/Core/Logger'
import { IPositiveResponse, INegativeResponse } from '../../common/interfaces/IResponse'
import { ITelegram } from '../../common/interfaces/Itelegram'
import telegramConfiguration from 'Config/telegram'
import { creatingErrMsg, creatingOkMsg } from '../../common/helpers/creatingResponse'

export default class TelegramBot {
  private readonly config: ITelegram
  constructor () {
    this.config = telegramConfiguration
  }

  protected formatDate = (date: DateTime): string => {
    return date
      .setLocale('ru')
      .setZone('Europe/Moscow')
      .toLocaleString(DateTime.DATETIME_MED)
  }

  private async sendRequest (
    path: string,
    _data?: IMsgToTelegram
  ): Promise<{ ok: boolean } & IMsgToTelegram> {
    const response = await axios.get(
      `https://api.telegram.org/bot${this.config.telegram_bot_token}${path}`
    )
    return response.data
  }

  public async sendMsgToTelegram (
    id: number,
    apartmentAddress: string,
    dateFrom: DateTime,
    dateTo: DateTime,
    fixedTotalPrice: number,
    name: string,
    phone: string,
    paymentUrl: string
  ): Promise<INegativeResponse | IPositiveResponse<IMsgToTelegram>> {
    const msg = this.createMessageBody(
      id,
      apartmentAddress,
      dateFrom,
      dateTo,
      fixedTotalPrice,
      name,
      phone,
      paymentUrl
    )

    try {
      const telegramResponse = await this.sendRequest(
        `/sendMessage?&chat_id=${this.config.telegram_chat_id}&parse_mode=html&text=${msg}`
      )
      return creatingOkMsg(telegramResponse)
    } catch (err: unknown) {
      if (err instanceof Error) {
        Logger.error(`Order '${id}' not sent via telegram bot, error: '${err.message}'`)
        return creatingErrMsg('Failed telegram response.', err.message)
      } else {
        Logger.error(`Order '${id}' not sent via telegram bot. Unknown error: ${util.inspect(err)}`)
        return creatingErrMsg('Failed telegram response.', `Unknown error: ${util.inspect(err)}`)
      }
    }
  }

  private createMessageBody (
    id: number,
    apartmentAddress: string,
    dateFrom: DateTime,
    dateTo: DateTime,
    fixedTotalPrice: number,
    name: string,
    phone: string,
    paymentUrl: string
  ): string {
    return encodeURIComponent(`
      Заказ № ${id}
      Адрес: ${apartmentAddress}
      Забранирован на имя ${name}.
      Контактный телефон:  ${phone}.
      Даты проживания:
      с ${this.formatDate(dateFrom)}
      по ${this.formatDate(dateTo)}.
      Оплатить: ${fixedTotalPrice} руб.
      Cсылка на оплату: ${paymentUrl}
    `)
  }
}

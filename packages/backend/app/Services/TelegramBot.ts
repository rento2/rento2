import axios from 'axios'
import { DateTime } from 'luxon'

import util from 'util'
import Logger from '@ioc:Adonis/Core/Logger'
import telegramConfiguration from 'Config/telegram'

export default class TelegramBot {
  protected formatDate = (date: DateTime): string => {
    return date
      .setLocale('ru')
      .setZone('Europe/Moscow')
      .toLocaleString(DateTime.DATETIME_MED)
  }

  private async sendRequest (
    path: string,
  ): Promise<void> {
    const request: string = `https://api.telegram.org/bot${telegramConfiguration.telegram_bot_token}${path}`
    await axios.get(request)
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
  ): Promise<void> {
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

    if (!telegramConfiguration.telegram_chat_id) {
      Logger.warn('Telegram chat id is empty')
      return
    }

    try {
      const request: string = `/sendMessage?&chat_id=${telegramConfiguration.telegram_chat_id}&parse_mode=html&text=${msg}`
      await this.sendRequest(request)
    } catch (err: unknown) {
      if (err instanceof Error) {
        Logger.error(`Order '${id}' not sent via telegram bot, error: '${err.message}'`)
      } else {
        Logger.error(`Order '${id}' not sent via telegram bot. Unknown error: ${util.inspect(err)}`)
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

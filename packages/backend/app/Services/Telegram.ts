import axios from 'axios'
import telegramConfiguration from 'Config/telegram'
import { DateTime } from 'luxon'

class TelegramBot {
  private readonly config: typeof telegramConfiguration
  constructor () {
    this.config = telegramConfiguration
  }

  private async sendRequest<T extends Record<string, void>>(
    path: string,
    _data?: Record<string, void>
  ): Promise<{ ok: boolean } & Partial<T>> {
    const response = await axios.get(
      `https://api.telegram.org/bot${this.config.test_token}${path}`
    )
    return response.data
  }

  public async sendMsgToTelegram (msg: string): Promise<boolean> {
    return (
      (
        await this.sendRequest(
          `/sendMessage?&chat_id=${this.config.test_chat_id}&parse_mode=html&text=${msg}`
        )
      ).ok
    )
  }

  public async createMessageBody (
    dateFrom: DateTime | Date,
    dateTo: DateTime | Date,
    apartmentId: number,
    fixedPrice: number,
    name: string,
    email: string,
    phone: string
  ): Promise<boolean> {
    const msg = `
  from: ${dateFrom},
  to:  ${dateTo},
  apartmentId:  ${apartmentId},
  fixedPrice:  ${fixedPrice},
  name:  ${name},
  email: ${email},
  phone:  ${phone}
  `

    return await this.sendMsgToTelegram(msg)
  }
}

export const telegram = new TelegramBot()

import { ItelegramConfiguration } from './../../common/interfaces/Itelegram';
import axios from "axios";
import telegramConfiguration from "Config/telegram";
import { DateTime } from "luxon";


class TelegramBot {
  private readonly config: ItelegramConfiguration;
  constructor() {
    this.config = telegramConfiguration;
  }

  private async sendRequest<T extends Record<string, void>>(
    path: string,
    _data?: Record<string, void>
  ): Promise<{ ok: boolean } & Partial<T>> {
    const response = await axios.get(
      `https://api.telegram.org/bot${this.config.telegram_bot_token}${path}`
    );
    return response.data;
  }

  public async sendMsgToTelegram(msg: string): Promise<boolean> {
    return (
      await this.sendRequest(
        `/sendMessage?&chat_id=${this.config.telegram_chat_id}&parse_mode=html&text=${msg}`
      )
    ).ok;
  }

  public async createMessageBody(
    id: number,
    dateFrom: DateTime | Date,
    dateTo: DateTime | Date,
    fixedTotalPrice: number,
    name: string,
    phone: string,
    payment_url: string
    ): Promise<boolean> {
    const msg =encodeURIComponent(`
      Заказ № ${id}
      забранирован на имя ${name}
      контактный телефон:  ${phone}.
      Даты проживания:
      с ${dateFrom.toLocaleString()} по ${dateTo.toLocaleString()}.
      Оплатить: ${fixedTotalPrice}.
      Cсылка на оплату:${payment_url}
    `);
    return await this.sendMsgToTelegram(msg);
  }
}

export const telegram = new TelegramBot();

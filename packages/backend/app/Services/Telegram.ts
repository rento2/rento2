import { IPositiveResponse, INegativeResponse } from './../../common/interfaces/IResponse';
import { ITelegram } from "../../common/interfaces/Itelegram";
import axios from "axios";
import telegramConfiguration from "Config/telegram";
import { DateTime } from "luxon";
import { creatingErrMsg, creatingOkMsg } from "../../common/helpers/creatingResponse";

export default class TelegramBot {
  private readonly config: ITelegram;
  constructor() {
    this.config = telegramConfiguration;
  }

  protected formatDate = (date: DateTime): string => {
    return date
      .setLocale("ru")
      .setZone("Europe/Moscow")
      .toLocaleString(DateTime.DATETIME_MED);
  };

  private async sendRequest(
    path: string,
    _data?: Record<string, void>
  ): Promise<INegativeResponse | IPositiveResponse<Record<string, void>>> {
    const response = await axios.get(
      `https://api.telegram.org/bot${this.config.telegram_bot_token}${path}`
    );
    return response.data;
  }

  public async sendMsgToTelegram(
    id: number,
    apartmentAddress: string,
    dateFrom: DateTime,
    dateTo: DateTime,
    fixedTotalPrice: number,
    name: string,
    phone: string,
    payment_url: string
  ): Promise<any> {

    const msg = this.createMessageBody(
      id,
      apartmentAddress,
      dateFrom,
      dateTo,
      fixedTotalPrice,
      name,
      phone,
      payment_url
    );

    try {
      const telegramResponse = await this.sendRequest(
        `/sendMessage?&chat_id=1${this.config.telegram_chat_id}&parse_mode=html&text=${msg}`
      );
      return creatingOkMsg(telegramResponse)
    } catch (err) {
      const error = err as Error
      return creatingErrMsg('Failed telegram response.', error.message)
    }
  }

  private createMessageBody(
    id: number,
    apartmentAddress: string,
    dateFrom: DateTime,
    dateTo: DateTime,
    fixedTotalPrice: number,
    name: string,
    phone: string,
    payment_url: string
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
      Cсылка на оплату: ${payment_url}
    `);
  }
}

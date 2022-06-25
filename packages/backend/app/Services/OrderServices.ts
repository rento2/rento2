import TelegramBot from "App/Services/Telegram";
import Bnovo from "App/Services/Bnovo";
import { IPaidOrder } from "../../common/interfaces/IPaidOrder";

export default class OrderService {
  newBnovo
  newTelegramBot
  constructor() {
    this.newBnovo = new Bnovo();
    this.newTelegramBot = new TelegramBot();
  }

  public async notifyPayment(paidOrder: IPaidOrder): Promise<void> {
    const response = await this.newBnovo.bookApartment(
      paidOrder.dateFrom,
      paidOrder.dateTo,
      paidOrder.apartmentId,
      paidOrder.prices,
      paidOrder.payload
    );

    if (response) {
      await this.newTelegramBot.sendMsgToTelegram(
        paidOrder.id,
        paidOrder.apartmentAddress,
        paidOrder.dateFrom,
        paidOrder.dateTo,
        paidOrder.fixedTotalPrice,
        paidOrder.payload.name,
        paidOrder.payload.phone,
        response.payment_url
      );
    }
  }
}

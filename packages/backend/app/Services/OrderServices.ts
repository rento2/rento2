import TelegramBot from "App/Services/Telegram";
import Bnovo from "App/Services/Bnovo";
import { IPaidOrder } from "../../common/interfaces/IPaidOrder";

export default class OrderService {
  public async notifyPayment(paidOrder: IPaidOrder): Promise<void> {
    const newBnovo = new Bnovo();

    const response = await newBnovo.bookApartment(
      paidOrder.dateFrom,
      paidOrder.dateTo,
      paidOrder.apartmentId,
      paidOrder.prices,
      paidOrder.payload
    );

    if (response) {
      const NewTelegramBot = new TelegramBot();
      await NewTelegramBot.sendMsgToTelegram(
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

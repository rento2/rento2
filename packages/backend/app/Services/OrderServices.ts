import { telegram } from "App/Services/Telegram";
import Bnovo from "App/Services/Bnovo";
import { IpaidOrder } from "../../common/interfaces/IOrderServices";


class OrderServices {
  public async notifyPayment(paidOrder: IpaidOrder): Promise<void> {
    const newBnovo = new Bnovo();
    let response = await newBnovo.bookApartment(
      paidOrder.dateFrom,
      paidOrder.dateTo,
      paidOrder.apartmentId,
      paidOrder.prices,
      paidOrder.payload
    );

    if (response) {
      await telegram.createMessageBody(
        paidOrder.id,
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

export const orderServices = new OrderServices();

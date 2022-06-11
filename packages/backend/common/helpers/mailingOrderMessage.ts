import { telegram } from 'App/Services/Telegram';
import Bnovo from 'App/Services/Bnovo'
import { Order } from 'App/Models/Order';
import { DateTime } from "luxon";

export async function mailingOrderMessage(order: InstanceType<Order>) {
  const { dateFrom, dateTo, apartmentId, fixedPrice, name, email, phone, prices } = order
  const surname = name.split(' ')[0]
  const payload = { name, surname, email, phone }

  await telegram.createMessageBody(dateFrom, dateTo, apartmentId, fixedPrice, name, email, phone);

  class NewBnova extends Bnovo {
    constructor() {
      super()
    }

    public async sendBookApartment(dateFrom: DateTime, dateTo: DateTime, apartmentId: number, prices: [], payload: {
      name: string
      surname: string
      email: string
      phone: string
    }): Promise<void> {
      console.log(dateFrom, dateTo, apartmentId, prices, payload);

      this.bookApartment(dateFrom, dateTo, apartmentId, prices, payload)
    }
  }
  const newBnova = new NewBnova()
  await newBnova.sendBookApartment(dateFrom, dateTo, apartmentId, prices, payload)
}

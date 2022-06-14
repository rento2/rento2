import { telegram } from 'App/Services/Telegram'
import Bnovo from 'App/Services/Bnovo'
import { Order } from 'App/Models/Order'
import { DateTime } from 'luxon'

class OrderServices {
  public async notifyPayment (order: InstanceType<Order>): Promise<void> {
    const {
      dateFrom,
      dateTo,
      apartmentId,
      fixedPrice,
      name,
      email,
      phone,
      prices,
    } = order
    const surname = name.split(' ')[0]
    const payload = { name, surname, email, phone }

    await telegram.createMessageBody(
      dateFrom,
      dateTo,
      apartmentId,
      fixedPrice,
      name,
      email,
      phone,
    )

    class NewBnova extends Bnovo {
      public async sendBookApartment (
        dateFrom: DateTime,
        dateTo: DateTime,
        apartmentId: number,
        prices: any[],
        payload: {
          name: string
          surname: string
          email: string
          phone: string
        }
      ): Promise<void> {
        this.bookApartment(dateFrom, dateTo, apartmentId, prices, payload)
      }
    }

    const newBnova = new NewBnova()
    await newBnova.sendBookApartment(
      dateFrom,
      dateTo,
      apartmentId,
      prices,
      payload
    )
  }
}

export const orderServices = new OrderServices()

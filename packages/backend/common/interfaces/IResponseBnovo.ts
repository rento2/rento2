export interface IResponseBnovo {
  bookings: {
    name: string;
    number: string;
    arrival: string;
    departure: string;
    bookings: string;
    surname: string;
    email: string;
    phone: string;
    adults: number;
    children: number;
  };
  payment_url: string;
}

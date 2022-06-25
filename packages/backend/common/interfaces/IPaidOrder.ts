import { DateTime } from "luxon";

export interface IPaidOrder {
  id: number;
  apartmentAddress: string;
  dateFrom: DateTime;
  dateTo: DateTime;
  fixedTotalPrice: number;
  apartmentId: number;
  prices: any[];
  payload: {
    name: string;
    surname: string;
    email: string;
    phone: string;
  };
}

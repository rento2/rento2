import { IAccommodation } from './IAccommodation'
import Term from '../enums/Term'

export interface IApartment {
  id: number
  type: Term
  is_active: boolean
  name: string
  latin_name: string
  description: string
  bnovo_id: number
  price: number
  price_per_month: number
  discount: number
  commission: number
  utility_bills: number
  security_deposit_short: number
  security_deposit_long: number
  rooms_num: number
  storey: number
  total_storeys: number
  area: number
  kitchen_area: number
  distance_from_center: number
  adm_area: string
  district: string
  selling_point: string
  geo_coordinate_x: string
  geo_coordinate_y: string
  subway_station: string
  subway_line: string | null
  time_to_subway: number
  time_to_subway_by_vehicle: number
  repairs: number
  purity: number
  location: number
  price_quality: number
  total_rating: number
  check_in_start: string
  check_in_end: string
  check_out_end: string
  smoking_allowed: number
  partying_allowed: number
  children_allowed: number
  pets_allowed: number
  max_adults: number
  max_children: number
  created_at?: string
  updated_at?: string
  accommodations?: IAccommodation[]
}

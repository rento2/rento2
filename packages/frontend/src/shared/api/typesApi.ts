interface IMeta {
  result: string
  pagination: {
    perPage: number
    currentPage: number
    hasMorePages: boolean
    total: number
  }
}

interface IApartmentsData {
  price_per_month: string
  security_deposit_long: string
  id: string
  time_to_subway_by_foot: number
  time_to_subway_by_vehicle: number
  subway_station: string
  name: string
  rooms_num: number
  storey: number
  total_storeys: number
  area: string
}

interface IApartmentsOneResponse {
  meta: IMeta
  data: IApartmentsData
}

interface IApartmentsListResponse {
  meta: IMeta
  data: IApartmentsData[]
}

export type {
  IApartmentsData,
  IApartmentsOneResponse,
  IApartmentsListResponse
}

type TType = 'long' | 'short' | 'all'

interface IApartmentItem {
  pricePerMonth: string
  securityDepositLong: string
  id: string
  timeToSubwayByFoot: number
  timeToSubwayByVehicle: number
  subwayStation: string
  name: string
  roomsNum: number
  storey: number
  totalStoreys: number
  area: string
  type: TType
  isActive: boolean
  isPopular: boolean
  isRentoChoose: boolean
  latinName: string
  description: string
  bnovoId: string
  inparsId: string
  price: string
  discount: string
  commission: string
  utilityBills: string
  securityDepositShort: string
  kitchenArea: string
  distanceFromCenter: number
  admArea: string
  district: string
  sellingPoint: string
  geoCoordinateX: string
  geoCoordinateY: string
  subwayLine: string
  repairs: string
  purity: string
  location: string
  priceQuality: string
  totalRating: string
  checkInStart: string
  checkInEnd: string
  checkOutEnd: string
  smokingAllowed: boolean
  partyingAllowed: boolean
  childrenAllowed: boolean
  petsAllowed: boolean
  maxAdults: number
  maxChildren: number
  createdAt: string
  updatedAt: string
  sleepingPlaces: ISleepingPlaces[]
  accommodations: IAccommodations[]
  services: IServices[]
  banners: IBanners[]
  photos: IPhotos[]
}

interface ISleepingPlaces {
  id: string
  name: string
  type: string
  size: number
  createdAt: string
  updatedAt: string
}

interface IAccommodations {
  id: string
  name: string
  nameEn: string
  createdAt: string
  updatedAt: string
}

interface IServices {
  id: string
  type: TType
  name: string
  createdAt: string
  updatedAt: string
}

interface IBanners {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

interface IPhotos {
  id: string
  apartment_id: string
  link: string
  path: string
  created_at: string
  updated_at: string
}

interface IMeta {
  result: string
  pagination: {
    perPage: number
    currentPage: number
    hasMorePages: boolean
    total: number
  }
}

interface IApartmentsDataOne {
  items: IApartmentItem
  additionals: IAdditionals
}

interface IApartmentsDataList {
  items: IApartmentItem[]
  additionals: IAdditionals
}

interface IAdditionals {
  collections: {
    popular: IApartmentItem[]
    rentoChoose: IApartmentItem[]
    inCityCenter: IApartmentItem[]
    newlyAdded: IApartmentItem[]
    nearTheSubway: IApartmentItem[]
  }
}

interface IApartmentsOneResponse {
  meta: IMeta
  data: IApartmentsDataOne
}

interface IApartmentsListResponse {
  meta: IMeta
  data: IApartmentsDataList
}

export type {
  IApartmentItem,
  IApartmentsDataList,
  IApartmentsOneResponse,
  IApartmentsListResponse
}

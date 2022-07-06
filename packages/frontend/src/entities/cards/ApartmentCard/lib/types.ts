import { IApartmentItem } from '@shared/api'

export interface IApartmentCard extends IApartmentItem {
  isDeposit?: boolean
  pathPage: string
  detailsInfo: string
  priceInfo: string
  metroInfo: JSX.Element
  media: JSX.Element
  classCard?: string
}

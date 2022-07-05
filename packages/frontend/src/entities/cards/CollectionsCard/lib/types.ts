import { IApartmentItem } from '@shared/api'

export interface ICollectionsCard extends IApartmentItem {
  isDeposit?: boolean
  pathPage: string
  detailsInfo: string
  priceInfo: string
  metroInfo: JSX.Element
}

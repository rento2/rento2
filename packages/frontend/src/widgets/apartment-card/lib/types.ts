import { IApartmentItem } from '@shared/api'

export interface IApartmentCard extends IApartmentItem {
  mode?: 'promo'
  pathPage: string
}

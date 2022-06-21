import { IApartmentsData } from '@shared/api'

export interface IApartmentCard extends IApartmentsData {
  mode?: 'promo'
  pathPage: string
}

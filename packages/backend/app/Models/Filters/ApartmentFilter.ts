import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Apartment from 'App/Models/Apartment'

export default class ApartmentFilter extends BaseModelFilter {
  public $query!: ModelQueryBuilderContract<typeof Apartment, Apartment>

  apartmentRentType (value: 'long' | 'short'): ModelQueryBuilderContract<typeof Apartment, Apartment> {
    return this.$query.where('type', value)
  }
}

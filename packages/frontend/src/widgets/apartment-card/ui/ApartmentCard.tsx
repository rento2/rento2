import { IconWalker, IconMetro } from '@shared/ui/icons'
import { CardSlider } from './card-slider/CardSlider'
import styles from './ApartmentCard.module.scss'
import { mockPhotos } from '../model/mockData'
import { IApartmentCard } from '@shared/types'

export const ApartmentCard = (props: IApartmentCard): JSX.Element => {
  const {
    price_per_month: price,
    security_deposit_long: deposit,
    distance_from_center: distance,
    subway_station: subway,
    name,
    rooms_num: rooms,
    storey,
    total_storeys: total,
    area
  } = props

  return (
    <li
      className={ styles['card'] }
    >
      <CardSlider images={ mockPhotos } />
      <div className={ styles['card__info'] }>
        <h2 className={ styles['card__price'] }>
          {`${price}₽ / месяц`}
        </h2>
        <span>
          {`Депозит: 400000 ${deposit}`}
        </span>
        <p className={ styles['card__details'] }>
          {`${rooms} комн · ${area} м2 · этаж${storey}/${total}`}
        </p>
        <p className={ styles['card__location'] }>
          <span>
            {name}
          </span>
          <div>
            <span className={ styles['card__subway'] }>
              <IconMetro classProps={ styles['card__icon'] } />
              {subway}
            </span>

            <span className={ styles['card__distance'] }>
              <IconWalker classProps={ styles['card__icon'] } />
              {distance}
            </span>
          </div>
        </p>
      </div>
    </li>
  )
}

import { MouseEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

import { IconWalker, IconMetro, IconHeart, ButtonIcon, IconBus } from '@shared/ui'
import { CardSlider } from './card-slider/CardSlider'
import styles from './ApartmentCard.module.scss'
import { mockPhotos } from '../model/mockData'
import { IApartmentCard } from '../lib/types'

const MetroInfo = (subwayStation: string, timeFoot: number, timeVehicle: number): JSX.Element => {
  return (
    <li>
      <span className={ styles.card__subway }>
        <IconMetro classProps={ styles.card__icon } />
        {subwayStation}
      </span>
      <span className={ styles.card__distance }>
        <IconWalker classProps={ styles.card__icon } />
        {`${timeFoot} минут`}
      </span>
      <span className={ styles.card__distance }>
        <IconBus classProps={ styles.card__icon } />
        {`${timeVehicle} минут`}
      </span>
    </li>
  )
}

export const ApartmentCard = (props: IApartmentCard): JSX.Element => {
  const {
    pricePerMonth,
    securityDepositLong,
    timeToSubwayByFoot,
    timeToSubwayByVehicle,
    subwayStation,
    name,
    roomsNum,
    storey,
    totalStoreys,
    area,
    id,
    mode,
    pathPage
  } = props

  const click = (e: MouseEvent<HTMLButtonElement>): void => { e.preventDefault() }

  return (
    <Link href={ `/${pathPage}/${id}` }>
      <a className={ classNames(styles.card, { [styles['card--promo']]: mode === 'promo' }) }>
        { mode === 'promo'
          ? (
            <div className={ styles.card__image }>
              <Image alt='room1'
                height={ 147 }
                layout="responsive"
                src='/images/long/room1.jpg'
                width={ 260 }
              />
            </div>
            )
          : (
            <CardSlider images={ mockPhotos } />
            )}
        <div
          className={ classNames(
            styles.card__info,
            { [styles['card__info--promo']]: mode === 'promo' })
          }
        >
          <p className={ styles.card__price }>
            {`${pricePerMonth}₽ / месяц`}
          </p>

          { mode !== 'promo' && (
            <p className={ styles.card__deposit }>
              {`Депозит: ${securityDepositLong}`}
            </p>)
          }
          <p className={ styles.card__details }>
            {`${roomsNum} комн · ${area} м2 · этаж ${storey}/${totalStoreys}`}
          </p>
          <p className={ styles['card__location'] }>
            {name}
          </p>
          <ul>
            {MetroInfo(subwayStation, timeToSubwayByFoot, timeToSubwayByVehicle)}
          </ul>
          <ButtonIcon
            classProps={ classNames(styles.card__favourite) }
            full='stroke'
            size='32'
            onClick={ click }
          >
            <IconHeart />
          </ButtonIcon>
        </div>
      </a>
    </Link>
  )
}

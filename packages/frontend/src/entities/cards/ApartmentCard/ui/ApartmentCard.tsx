import { MouseEvent } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { IconHeart, ButtonIcon } from '@shared/ui'

import { CardSlider } from './card-slider/CardSlider'
import { mockPhotos } from '../model/mockData'
import { IApartmentCard } from '../lib/types'
import styles from './ApartmentCard.module.scss'

// TODO: Добавить рейтинг (звезду) для краткосрока. Это будет необязательный параметр
export const ApartmentCard = (props: IApartmentCard): JSX.Element => {
  const {
    securityDepositLong,
    name,
    id,
    isDeposit = false,
    pathPage,
    priceInfo,
    detailsInfo,
    metroInfo
  } = props

  const click = (e: MouseEvent<HTMLButtonElement>): void => { e.preventDefault() }

  return (
    <Link href={ `/${pathPage}/${id}` }>
      <a className={ styles.card }>
        <CardSlider classHoverParent={ classNames(styles['btn-hover']) }
          images={ mockPhotos }
        />
        <div className={ styles.card__info }>
          <div className={ styles['card__price-wrapper'] }>
            <p className={ styles.card__price }>
              {priceInfo}
            </p>
            { isDeposit && (
              <p className={ styles.card__deposit }>
                {`Депозит: ${securityDepositLong}`}
              </p>)
            }
          </div>
          <div className={ styles.card__inner }>
            <div>
              <p className={ styles.card__location }>
                {name}
              </p>
              {metroInfo}
            </div>
            <p className={ styles.card__details }>
              {detailsInfo}
            </p>
          </div>
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

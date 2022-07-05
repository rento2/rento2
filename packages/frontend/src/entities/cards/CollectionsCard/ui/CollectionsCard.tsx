import { MouseEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

import { IconHeart, ButtonIcon } from '@shared/ui'

import { ICollectionsCard } from '../lib/types'
import styles from './CollectionsCard.module.scss'

export const CollectionsCard = (props: ICollectionsCard): JSX.Element => {
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
        <div className={ styles.card__image }>
          <Image alt='room1'
            height={ 147 }
            layout="responsive"
            src='/images/long/room1.jpg'
            width={ 260 }
          />
        </div>
        <div
          className={ styles.card__info }
        >
          <p className={ styles.card__price }>
            { priceInfo }
          </p>

          { isDeposit && (
            <p className={ styles.card__deposit }>
              {`Депозит: ${securityDepositLong}`}
            </p>)
          }
          <p className={ styles['card__location'] }>
            {name}
          </p>
          {metroInfo}
          <p className={ styles.card__details }>
            {detailsInfo}
          </p>
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

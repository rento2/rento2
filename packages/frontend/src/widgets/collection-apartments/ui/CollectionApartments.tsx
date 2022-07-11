import { SwiperProps } from 'swiper/react'
import { Navigation } from 'swiper'
import classNames from 'classnames'

import { IApartmentItem } from '@shared/api'

import { SwiperWithButton } from '@entities/carousels/SwiperWithButton'

import { titleSlider } from '../model/constants'
import { ITitleSlider } from '../lib/types'
import styles from './CollectionApartments.module.scss'

interface ICollectionApartments {
  cards: IApartmentItem[]
  titleCollection: keyof ITitleSlider
  children: (apartment: IApartmentItem) => JSX.Element
}

export const CollectionApartments = ({ cards, titleCollection, children }: ICollectionApartments): JSX.Element => {
  const initParams: SwiperProps = {
    className: styles.collection__slider,
    modules: [Navigation],
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 10,
    breakpoints: {
      1280: {
        slidesPerView: 4
      }
    }
  }

  return (
    <div className={ styles.collection }>
      <div className={ styles.collection__wrapper }>
        <h2 className={ styles.collection__title }>
          {titleSlider[titleCollection]}
        </h2>

        <SwiperWithButton
          classBtnNext={ classNames(styles['collection__button-next']) }
          classBtnPrev={ classNames(styles['collection__button-prev']) }
          classSlideWrapper={ classNames(styles.collection__slide) }
          elementData={ cards }
          initSwiperParams={ initParams }
        >
          {card =>
            children(card)
          }
        </SwiperWithButton>
      </div>
    </div>
  )
}

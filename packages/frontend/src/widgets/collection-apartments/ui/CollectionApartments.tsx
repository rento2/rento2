import { useRef } from 'react'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import classNames from 'classnames'

import { IconArrowLeft, IconArrowRight, ButtonIcon } from '@shared/ui'
import { IApartmentItem } from '@shared/api'

import { titleSlider } from '../model/constants'
import { ITitleSlider } from '../lib/types'
import styles from './CollectionApartments.module.scss'

interface ICollectionApartments {
  cards: IApartmentItem[]
  titleCollection: keyof ITitleSlider
  children: (apartment: IApartmentItem) => JSX.Element
}

// TODO: Создать оболочку entities для слайдера, где будет onBeforeInit, кнопки(?), инициализация, которая через пропс будет передаваться
export const CollectionApartments = ({ cards, titleCollection, children }: ICollectionApartments): JSX.Element => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const initSwiperParams: SwiperProps = {
    className: styles.collection__slider,
    modules: [Navigation],
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 10,
    breakpoints: {
      1280: {
        slidesPerView: 4
      }
    },
    onBeforeInit: onBeforeInit
  }

  function onBeforeInit (Swiper: SwiperCore): void {
    const navigation = Swiper.params.navigation
    if (typeof navigation !== 'boolean' && typeof navigation !== 'undefined') {
      navigation.prevEl = prevRef.current
      navigation.nextEl = nextRef.current
    }
  }

  return (
    <div className={ styles.collection }>
      <div className={ styles.collection__wrapper }>
        <h2 className={ styles.collection__title }>
          {titleSlider[titleCollection]}
        </h2>

        <ButtonIcon classProps={ classNames(styles['collection__button-prev']) }
          full='stroke'
          refProp={ prevRef }
          size='40'
        >
          <IconArrowLeft />
        </ButtonIcon>

        <ButtonIcon classProps={ classNames(styles['collection__button-next']) }
          full='stroke'
          refProp={ nextRef }
          size='40'
        >
          <IconArrowRight />
        </ButtonIcon>

        <Swiper { ...initSwiperParams }>
          {cards?.map((el) => (
            <SwiperSlide key={ el.id }
              className={ styles.collection__slide }
            >
              {children(el)}
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  )
}

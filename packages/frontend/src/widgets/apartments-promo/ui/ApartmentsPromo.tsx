import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import classNames from 'classnames'

import { IconArrowLeft, IconArrowRight, ButtonIcon } from '@shared/ui'
import { IApartmentItem } from '@shared/api'

import { titleSlider } from '../model/constants'
import { ITitleSlider } from '../lib/types'
import styles from './ApartmentsPromo.module.scss'

// TODO: Создать оболочку entities для слайдера, где будет onBeforeInit, кнопки(?), инициализация, которая через пропс будет передаваться
// TODO: Вынести пропс в интерфейс
// TODO: Переименуй компонент и стили внутри в CollectionApartments
export const ApartmentsPromo = ({ cards, titleCollection, children }: {cards: IApartmentItem[], pathPage: string, titleCollection: keyof ITitleSlider, children: (apartment: IApartmentItem) => JSX.Element}): JSX.Element => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const initSwiperParams = {
    className: styles['promo__slider'],
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 10,
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
    <div className={ styles['promo'] }>
      <div className={ styles['promo__wrapper'] }>
        <h2 className={ styles['promo__title'] }>
          {titleSlider[titleCollection]}
        </h2>

        <ButtonIcon classProps={ classNames(styles['promo__button-prev']) }
          full='stroke'
          refProp={ prevRef }
          size='40'
        >
          <IconArrowLeft />
        </ButtonIcon>

        <ButtonIcon classProps={ classNames(styles['promo__button-next']) }
          full='stroke'
          refProp={ nextRef }
          size='40'
        >
          <IconArrowRight />
        </ButtonIcon>

        <Swiper { ...initSwiperParams }>
          {cards?.map((el) => (
            <SwiperSlide key={ el.id }
              className={ styles.promo__slide }
            >
              {children(el)}
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  )
}

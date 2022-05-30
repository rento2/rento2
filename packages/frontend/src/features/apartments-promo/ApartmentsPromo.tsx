import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import { IApartmentCard } from '@shared/types'
import { IconArrowLeft, IconArrowRight, ButtonIcon } from '@shared/ui'

import styles from './ApartmentsPromo.module.scss'

export const ApartmentsPromo = ({ cards }: {cards: IApartmentCard[]}, render): JSX.Element => {
  const swiperRef = useRef(null)

  return (
    <div className={ styles['promo'] }>
      <div className={ styles['promo__wrapper'] }>
        <h2 className={ styles['promo__title'] }>
          Квартиры в центре
        </h2>
        <ButtonIcon classProps={ styles['promo__button-prev'] }
          full='stroke'
          size='40'
          onClick={ () => swiperRef?.current.swiper.slidePrev() }
        >
          <IconArrowLeft />
        </ButtonIcon>
        <ButtonIcon classProps={ styles['promo__button-next'] }
          full='stroke'
          size='40'
          onClick={ () => swiperRef?.current.swiper.slideNext() }
        >
          <IconArrowRight />
        </ButtonIcon>
        <Swiper
          ref={ swiperRef }
          loop
          className={ styles['promo__slider'] }
          modules={ [Navigation, Pagination] }
          slidesPerView={ 4 }
        >
          {cards?.map((el) => (
            <SwiperSlide key={ el.id }>
              {render}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

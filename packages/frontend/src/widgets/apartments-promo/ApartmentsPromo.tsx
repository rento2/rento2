import { useRef, useReducer } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import { IApartmentCard } from '@shared/types'
import { ApartmentCard } from '@widgets/apartment-card'
import styles from './ApartmentsPromo.module.scss'
import { IconArrowLeft, IconArrowRight, ButtonIcon } from '@shared/ui'

const initialState = { prevButton: true, nextButton: false }

const reducer = (state, action): { nxtButton: boolean, prevButton: boolean} => {
  switch (action.type) {
    case 'initial':
      return { nextButton: false, prevButton: false }
    case 'nextButton':
      return { ...state, nextButton: true }
    case 'prevButton':
      return { ...state, prevButton: true }
    default:
      throw new Error()
  }
}

export const ApartmentsPromo = ({ cards }: {cards: IApartmentCard[]}): JSX.Element => {
  const swiperRef = useRef(null)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className={ styles['promo'] }>
      <div className={ styles['promo__wrapper'] }>
        <h2 className={ styles['promo__title'] }>
          Квартиры в центре
        </h2>
        <ButtonIcon classProps={ styles['promo__button-prev'] }
          disabled={ state.prevButton }
          full='stroke'
          size='40'
          onClick={ () => swiperRef?.current.swiper.slidePrev() }
        >
          <IconArrowLeft />
        </ButtonIcon>
        <ButtonIcon classProps={ styles['promo__button-next'] }
          disabled={ state.nextButton }
          full='stroke'
          size='40'
          onClick={ () => swiperRef?.current.swiper.slideNext() }
        >
          <IconArrowRight />
        </ButtonIcon>
        <Swiper
          ref={ swiperRef }
          className={ styles['promo__slider'] }
          modules={ [Navigation, Pagination] }
          slidesPerView={ 4 }
          spaceBetween={ 10 }
          onSlideChange={ () => {
            console.log(swiperRef?.current.swiper.realIndex)
            if (swiperRef?.current.swiper.realIndex === 6) {
              dispatch({ type: 'nextButton' })
            } else if (swiperRef?.current.swiper.realIndex === 0) {
              dispatch({ type: 'prevButton' })
            } else {
              dispatch({ type: 'initial' })
            }
          } }
        >
          {cards?.map((el) => (
            <SwiperSlide key={ el.id }
              className={ styles['promo__slide'] }
            >
              <ApartmentCard { ...el }
                mode="promo"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

import { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import classNames from 'classnames'

import { IconArrowLeft, IconArrowRight, ButtonIcon } from '@shared/ui'

import styles from './CardSlider.module.scss'

interface IImage {
  src: string
  alt: string
}

// TODO: Вынести в отдельную сущность в карточку передавать через пропс
export const CardSlider = ({ images, classHoverParent }: { images: IImage[], classHoverParent?: string}): JSX.Element => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const initSwiperParams = {
    loop: true,
    height: 220,
    modules: [Navigation, Pagination],
    pagination: {
      dynamicBullets: true,
      dynamicMainBullets: 4,
      clickable: true,
      bulletClass: classNames(styles.slider__bullet)
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
    <div className={ styles.slider }
      onClick={ (e) => e.preventDefault() }
    >
      <ButtonIcon classProps={ classNames(styles['slider__btn-prev'], classHoverParent) }
        full='stroke'
        refProp={ prevRef }
        size='24'
      >
        <IconArrowLeft classProps={ classNames(styles['slider__btn-icon']) } />
      </ButtonIcon>

      <ButtonIcon classProps={ classNames(styles['slider__btn-next'], classHoverParent) }
        full='stroke'
        refProp={ nextRef }
        size='24'
      >
        <IconArrowRight classProps={ classNames(styles['slider__btn-icon']) } />
      </ButtonIcon>

      <Swiper { ...initSwiperParams }>
        {images.map(({ src, alt }, idx) => (
          <SwiperSlide key={ `${alt}-${idx}` }
            className={ classNames(styles.slider__image) }
          >
            <Image alt={ alt }
              layout='fill'
              objectFit='cover'
              src={ src }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

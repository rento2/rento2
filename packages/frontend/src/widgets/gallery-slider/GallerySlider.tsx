import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper'
import Image from 'next/image'
import classNames from 'classnames'
import { ButtonIcon, IconArrowLeft, IconArrowRight } from '@shared/ui'
import styles from './GallerySlider.module.scss'

interface GalleryPorps {
  images: any[] // пока неясно, в каком формате будут приходить изображения
}

export function GallerySlider ({ images }: GalleryPorps): JSX.Element {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const thumbParams = {
    swiper: thumbsSwiper,
    slideThumbActiveClass: classNames(styles['active-thumb']),
    multipleActiveThumbs: false
  }

  function onBeforeInit (Swiper: SwiperCore): void {
    const navigation = Swiper.params.navigation
    if (typeof navigation !== 'boolean' && typeof navigation !== 'undefined') {
      navigation.prevEl = prevRef.current
      navigation.nextEl = nextRef.current
    }
  }

  return (
    <div className={ classNames(styles['gallery']) }>
      <Swiper
        draggable
        centerInsufficientSlides={ true }
        className={ classNames(styles['main-swiper']) }
        loop={ true }
        modules={ [FreeMode, Navigation, Thumbs] }
        spaceBetween={ 10 }
        thumbs={ thumbParams }
        onBeforeInit={ onBeforeInit }
      >
        {images.map((image, i) => (
          <SwiperSlide key={ i }
            className={ classNames(styles['main-image']) }
          >
            <Image
              layout="fill"
              objectFit="cover"
              src={ image }
            />
          </SwiperSlide>
        ))}

        {/* кнопки со стрелками */}
        <ButtonIcon background='iris'
          classProps={ classNames(styles['button'], styles['next-btn']) }
          full='stroke'
          refProp={ nextRef }
          size='40'
        >
          <IconArrowRight />
        </ButtonIcon>
        <ButtonIcon background='iris'
          classProps={ classNames(styles['button'], styles['prev-btn']) }
          full='stroke'
          refProp={ prevRef }
          size='40'
        >
          <IconArrowLeft />
        </ButtonIcon>
      </Swiper>

      {/* галлерея под основным изображением */}
      <Swiper
        watchSlidesProgress
        className={ classNames(styles['swiper-thumb']) }
        freeMode={ true }
        loop={ true }
        modules={ [FreeMode, Navigation, Thumbs] }
        slidesPerView={ 5 }
        spaceBetween={ 10 }
        onSwiper={ setThumbsSwiper }
      >
        {images.map((image, i) => (
          <SwiperSlide key={ i }
            className={ classNames(styles['thumb-image']) }
          >
            <Image
              layout="fill"
              objectFit="cover"
              src={ image }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

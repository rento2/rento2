import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper'
import Image from 'next/image'
import classNames from 'classnames'
import styles from './GallerySlider.module.scss'
import { GallerySliderIndicator } from './GallerySliderIndicator/GallerySliderIndicator'
import { GallerySliderNavigation } from './GallerySliderNavigation/GallerySliderNavigation'

interface IGalleryPorps {
  images: any[] // пока неясно, в каком формате будут приходить изображения
}

export function GallerySlider ({ images }: IGalleryPorps): JSX.Element {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)
  const [currentSlide, setCurrentSlide] = useState(1)

  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const thumbs = {
    swiper: thumbsSwiper,
    slideThumbActiveClass: classNames(styles['active-thumb']),
    multipleActiveThumbs: false
  }

  const mainSwiperParams = {
    draggable: true,
    grabCursor: true,
    centeredSlides: false,
    className: classNames(styles['main-swiper']),
    loop: true,
    modules: [FreeMode, Navigation, Thumbs],
    spaceBetween: 10,
    thumbs,
    onBeforeInit: onBeforeInit,
    onRealIndexChange: onIndexChange
  }

  const thumbsSwiperParams = {
    watchSlidesProgress: true,
    className: classNames(styles['swiper-thumb']),
    freeMode: true,
    modules: [FreeMode, Navigation, Thumbs],
    slidesPerView: 5,
    spaceBetween: 10,
    onSwiper: setThumbsSwiper
  }

  function onBeforeInit (Swiper: SwiperCore): void {
    const navigation = Swiper.params.navigation
    if (typeof navigation !== 'boolean' && typeof navigation !== 'undefined') {
      navigation.prevEl = prevRef.current
      navigation.nextEl = nextRef.current
    }
  }

  function onIndexChange (swiper: SwiperCore): void {
    setCurrentSlide(swiper.realIndex + 1)
  }

  return (
    <div className={ classNames(styles['gallery']) }>
      {/* основное изображение */}
      <Swiper { ...mainSwiperParams }>
        {images.map((image, i) => (
          <SwiperSlide
            key={ i }
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
        <GallerySliderNavigation
          nextRef={ nextRef }
          prevRef={ prevRef }
        />

        {/* индикатор */}
        <GallerySliderIndicator
          current={ currentSlide }
          total={ images.length }
        />
      </Swiper>

      {/* галлерея под основным изображением */}
      <Swiper { ...thumbsSwiperParams }>
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

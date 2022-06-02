import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Lazy } from 'swiper'
import classNames from 'classnames'
import styles from './CardSlider.module.scss'

interface IImage {
  src: string
  alt: string
}

export const CardSlider = ({ images }: { images: IImage[]}): JSX.Element => (
  <div className={ styles['slider'] }>
    <Swiper
      loop
      height={ 220 }
      modules={ [Navigation, Pagination, Scrollbar, A11y, Lazy] }
      pagination={ {
        clickable: true,
        horizontalClass: classNames(styles['slider__bullets'], 'flex-center'),
        bulletClass: styles['slider__bullet'],
        bulletActiveClass: styles['slider__bullet--active']
      } }
      width={ 295 }
    >
      {images.map(({ src, alt }) => (
        <SwiperSlide key={ alt }>
          <Image alt={ alt }
            className={ styles['slider__image'] }
            height={ 253 }
            layout="responsive"
            src={ src }
            width={ 340 }
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)

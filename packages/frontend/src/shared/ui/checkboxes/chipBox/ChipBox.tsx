import { FC } from 'react'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './ChipBox.module.scss'

interface IChipBox {
  chips: string[]
  value: string[]
  classProps?: string
  onChange: (value: string[]) => void
  marginRight?: number
  isSwipeable?: boolean
  slidesPerView?: number | 'auto'
}

export const ChipBox: FC<IChipBox> = ({ value, onChange, chips, classProps, isSwipeable = false, marginRight = 0, slidesPerView = 'auto' }) => {
  const handleSelect = (name: string) => () => {
    if (value.includes(name)) {
      onChange(value.filter(chipName => chipName !== name))
    } else onChange([...value, name])
  }

  if (isSwipeable) {
    return (
      <Swiper
        className={ classNames(classProps) }
        slidesPerView={ slidesPerView }
        spaceBetween={ marginRight }
      >
        {chips.map((chip, index) => (
          <SwiperSlide
            key={ index }
            className={ styles.box__slide }
          >
            <button
              className={ classNames(styles.box__chip, { [styles['box__chip-active']]: value.includes(chip) }) }
              type='button'
              onClick={ handleSelect(chip) }
            >
              {chip}
            </button>
          </SwiperSlide>))}
      </Swiper>
    )
  }
  return (
    <div className={ classNames(styles.box, classProps) }>
      {chips.map((chip, index) => (
        <button key={ index }
          className={ classNames(styles.box__chip, { [styles['box__chip-active']]: value.includes(chip) }) }
          type='button'
          onClick={ handleSelect(chip) }
        >
          {chip}
        </button>))}
    </div>
  )
}

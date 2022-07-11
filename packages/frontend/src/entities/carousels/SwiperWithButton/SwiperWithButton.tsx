import { useRef } from 'react'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import classNames from 'classnames'

import { IconArrowLeft, IconArrowRight, ButtonIcon, IButtonIcon } from '@shared/ui'

import styles from './SwiperWithButton.module.scss'

interface ISwiperWithButtonProps<T> {
  elementData: T[]
  children: (element: T) => JSX.Element
  initSwiperParams?: SwiperProps
  classSlideWrapper?: string
  classBtnNext?: string
  classBtnPrev?: string
  classIcon?: string
  btnProps?: IButtonIcon
}

export const SwiperWithButton = <T,>({
  elementData,
  children,
  initSwiperParams,
  classSlideWrapper,
  classBtnNext,
  classBtnPrev,
  classIcon,
  btnProps
}: ISwiperWithButtonProps<T>): JSX.Element => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const initParams = {
    onBeforeInit: onBeforeInit,
    ...initSwiperParams
  }

  function onBeforeInit (Swiper: SwiperCore): void {
    const navigation = Swiper.params.navigation
    if (typeof navigation !== 'boolean' && typeof navigation !== 'undefined') {
      navigation.prevEl = prevRef.current
      navigation.nextEl = nextRef.current
    }
  }
  return (
    <>
      <ButtonIcon classProps={ classNames(styles['button-prev'], classBtnPrev) }
        full='stroke'
        refProp={ prevRef }
        size='40'
        { ...btnProps }
      >
        <IconArrowLeft classProps={ classNames(classIcon) } />
      </ButtonIcon>

      <ButtonIcon classProps={ classNames(styles['button-next'], classBtnNext) }
        full='stroke'
        refProp={ nextRef }
        size='40'
        { ...btnProps }
      >
        <IconArrowRight classProps={ classNames(classIcon) } />
      </ButtonIcon>

      <Swiper { ...initParams }>
        {elementData.map((item, idx) => (
          <SwiperSlide key={ idx }
            className={ classNames(classSlideWrapper) }
          >
            {children(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

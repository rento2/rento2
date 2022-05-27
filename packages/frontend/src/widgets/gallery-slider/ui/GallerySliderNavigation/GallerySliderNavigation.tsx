import { ButtonIcon, IconArrowLeft, IconArrowRight } from '@shared/ui'
import classNames from 'classnames'
import { RefObject } from 'react'
import styles from './GallerySliderNavigation.module.scss'

interface IGallerySliderNavigation {
  nextRef: RefObject<HTMLButtonElement>
  prevRef: RefObject<HTMLButtonElement>
}

export function GallerySliderNavigation ({ nextRef, prevRef }: IGallerySliderNavigation): JSX.Element {
  return (
    <>
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
    </>
  )
}

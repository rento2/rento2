import { ButtonGeneral } from '@shared/ui'
import classNames from 'classnames'
import Image from 'next/image'

import catalogImage from '../images/variant-catalog.svg'
import apartmentImage from '../images/variant-apartment.svg'
import styles from './PersonalSearchBanner.module.scss'
import { useState } from 'react'
import { PersonalSearchModal } from './PersonalSearchModal/PersonalSearchModal'
import { PersonalSearchForm } from './PersonalSearchForm/PersonalSearchForm'

interface IPersonalSearchBanner {
  variant: 'catalog' | 'apartment'
}

export function PersonalSearchBanner ({ variant = 'apartment' }: IPersonalSearchBanner): JSX.Element {
  const [isModalShown, setIsModalShown] = useState(true)
  const [isFormShown, setIsFormShown] = useState(false)

  const stylesTitle = variant === 'catalog' ? styles['title-grade-secondary'] : styles['title-grade-primary']
  const stylesSubtitle = variant === 'catalog' ? styles['subtitle-grade-secondary'] : styles['subtitle-grade-primary']
  const stylesParagraph = variant === 'catalog' ? styles['paragraph-grade-secondary'] : styles['paragraph-grade-primary']
  const imageVariant = variant === 'catalog' ? catalogImage : apartmentImage

  return (
    <>
      <div className={ classNames(styles['container']) }>
        <div className={ classNames(styles['image-wrapper']) }>
          <Image
            layout='fill'
            objectFit='cover'
            src={ imageVariant }
          />
        </div>
        <div className={ classNames(styles['text']) }>
          <p className={ classNames(styles['title'], stylesTitle) }>
            Персональный поиск квартиры
          </p>
          <p className={ classNames(styles['subtitle'], stylesSubtitle) }>
            Ванная с окном или французский балкон? Конечно, найдём.
          </p>
          <p className={ classNames(styles['paragraph'], stylesParagraph) }>
            Поможем найти хорошую квартиру по вашим параметрам.
          </p>
        </div>
        <ButtonGeneral
          round
          classProps={ classNames(styles['button']) }
          font='s'
          grade={ variant === 'catalog' ? 'secondary' : 'primary' }
          height='40'
          onClick={ () => setIsModalShown(true) }
        >
          Подробнее
        </ButtonGeneral>
      </div>

      <PersonalSearchModal
        isShown={ isModalShown }
        showForm={ () => setIsFormShown(true) }
        onClose={ () => setIsModalShown(false) }
      />

      <PersonalSearchForm
        isShown={ isFormShown }
        onClose={ () => setIsFormShown(false) }
      />
    </>
  )
}

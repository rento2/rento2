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
  const [isModalShown, setIsModalShown] = useState(false)
  const [isFormShown, setIsFormShown] = useState(true)

  const stylesTitle = variant === 'catalog' ? styles['title-grade-secondary'] : styles['title-grade-primary']
  const stylesSubtitle = variant === 'catalog' ? styles['subtitle-grade-secondary'] : styles['subtitle-grade-primary']
  const stylesParagraph = variant === 'catalog' ? styles['paragraph-grade-secondary'] : styles['paragraph-grade-primary']
  const imageVariant = variant === 'catalog' ? catalogImage : apartmentImage

  return (
    <>
      <div className={ classNames(styles['banner']) }>
        <div className={ classNames(styles['banner__image-wrapper']) }>
          <Image
            layout='fill'
            objectFit='cover'
            src={ imageVariant }
          />
        </div>
        <div className={ classNames(styles['banner__text-container']) }>
          <p className={ classNames(styles['banner__title'], stylesTitle) }>
            Персональный поиск квартиры
          </p>
          <p className={ classNames(styles['banner__subtitle'], stylesSubtitle) }>
            Ванная с окном или французский балкон? Конечно, найдём.
          </p>
          <p className={ classNames(styles['banner__paragraph'], stylesParagraph) }>
            Поможем найти хорошую квартиру по вашим параметрам.
          </p>
        </div>
        <ButtonGeneral
          round
          classProps={ classNames(styles['banner__button']) }
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
        showForm={ () => {
          setIsModalShown(false)
          setIsFormShown(true)
        } }
        onClose={ () => setIsModalShown(false) }
      />

      <PersonalSearchForm
        isShown={ isFormShown }
        onClose={ () => setIsFormShown(false) }
      />
    </>
  )
}

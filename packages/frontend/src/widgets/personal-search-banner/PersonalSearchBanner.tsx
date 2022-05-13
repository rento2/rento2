import { ButtonGeneral } from '@shared/ui'
import classNames from 'classnames'
import Image from 'next/image'

import catalogImage from './images/variant-catalog.svg'
import apartmentImage from './images/variant-apartment.svg'
import styles from './PersonalSearchBanner.module.scss'

interface IPersonalSearchBanner {
  variant: 'catalog' | 'apartment'
}

export function PersonalSearchBanner ({ variant }: IPersonalSearchBanner): JSX.Element {
  return (
    <div className={ classNames(styles['container']) }>
      <div className={ classNames(styles['image-wrapper']) }>
        <Image
          layout='fill'
          objectFit='cover'
          src={ variant === 'catalog' ? catalogImage : apartmentImage }
        />
      </div>
      <div className={ classNames(styles['text']) }>
        <p className={ classNames(styles['title']) }>
          Персональный поиск квартиры
        </p>
        <p className={ classNames(styles['subtitle']) }>
          Ванная с окном или французский балкон? Конечно, найдём.
        </p>
        <p className={ classNames(styles['paragraph']) }>
          Поможем найти хорошую квартиру по вашим параметрам.
          {' '}
        </p>
      </div>
      <ButtonGeneral
        round
        classProps={ classNames(styles['button']) }
        font='s'
        grade={ variant === 'catalog' ? 'secondary' : 'primary' }
        height='40'
      >
        Подробнее
      </ButtonGeneral>
    </div>
  )
}

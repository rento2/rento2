import { FC } from 'react'
import classNames from 'classnames'

import { IIconClassStroke } from '@shared/ui/icons/types/iconTypes'

import styles from './IconBaseStyles.module.scss'

export const IconClose: FC<IIconClassStroke> = ({ figure = 'none', classProps }): JSX.Element => {
  // Кто исправит ошибку, удали пожалуйста лишнии стили из ./IconBaseStyles.scss
  const stylesFigure = styles[`${figure}`] ?? ''
  const stylesSize = styles['size-20'] ?? ''
  const isSize = figure !== 'none'

  return (
    <svg className={ classNames(styles['icon'], classProps, {
      [stylesFigure]: true,
      [stylesSize]: isSize
    }) }
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 16L16 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 16L8 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

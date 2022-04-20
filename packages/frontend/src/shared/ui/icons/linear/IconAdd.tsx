import { FC } from 'react'
import { IIconClassStroke } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconAdd: FC<IIconClassStroke> = ({ figure = 'none', classProps }): JSX.Element => {
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
      <path d="M6 12H18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 18V6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  )
}

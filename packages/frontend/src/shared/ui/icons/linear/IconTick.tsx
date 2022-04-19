import { FC } from 'react'
import { IIconClassStroke } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconTick: FC<IIconClassStroke> = ({ figure = 'none', classProps }): JSX.Element => {
  const stylesFigure = styles[`${figure}`] ?? ''
  const stylesSize = styles['tick-figure'] ?? ''
  const isSize = figure !== 'none'

  return (
    <svg className={ classNames(styles['icon'], classProps, {
      [stylesFigure]: true,
      [stylesSize]: isSize
    }) }
      height="8"
      viewBox="0 0 10 8"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.75 4.00004L3.58 6.83004L9.25 1.17004"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  )
}

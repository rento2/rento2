import { FC } from 'react'
import { IIconClassStroke } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconMinus: FC<IIconClassStroke> = ({ figure = 'none', classProps }): JSX.Element => {
  const stylesFigure = styles[`${figure}`] ?? ''
  const stylesSize = styles['minus-figure'] ?? ''
  const isSize = figure !== 'none'

  return (
    <svg className={ classNames(styles['icon'], classProps, {
      [stylesFigure]: true,
      [stylesSize]: isSize
    }) }
      height="2"
      viewBox="0 0 10 2"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1H9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

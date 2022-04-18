import { FC } from 'react'
import { IIconClassStroke } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconClose: FC<IIconClassStroke> = ({ figure = 'none', classProps }): JSX.Element => {
  const stylesFigure = styles[`${figure}`] ?? ''
  const stylesSize = styles['size-20'] ?? ''
  const size = figure !== 'none'

  return (
    <svg className={ classNames(styles['icon'], classProps, {
      [stylesFigure]: true,
      [stylesSize]: size
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

  // <svg className={ classNames(styles['icon'], props.classProps) }
  //   height="8"
  //   viewBox="0 0 8 8"
  //   width="8"
  //   xmlns="http://www.w3.org/2000/svg"
  // >
  //   <path d="M1.16992 6.82992L6.82992 1.16992"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //   />
  //   <path d="M6.82992 6.82992L1.16992 1.16992"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //   />
  // </svg>
  )
}

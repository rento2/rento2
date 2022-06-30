import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconArrowRight = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon'], props.classProps) }
      height="18"
      viewBox="0 0 9 18"
      width="9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.909973 16.92L7.42997 10.4C8.19997 9.62996 8.19997 8.36996 7.42997 7.59996L0.909973 1.07996"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
    </svg>

  )
}

import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconArrowLeft = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon'], props.classProps) }
      height="18"
      viewBox="0 0 9 18"
      width="9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.00003 16.92L1.48003 10.4C0.710027 9.62996 0.710027 8.36996 1.48003 7.59996L8.00003 1.07996"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
    </svg>

  )
}

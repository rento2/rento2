import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconArrowDown = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon'], props.classProps) }
      height="9"
      viewBox="0 0 18 9"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.92 0.949951L10.4 7.46995C9.63002 8.23995 8.37002 8.23995 7.60002 7.46995L1.08002 0.949951"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
    </svg>

  )
}

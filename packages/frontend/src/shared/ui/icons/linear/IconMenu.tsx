import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconMenu = (props: IIconClassProps): JSX.Element => (
  <svg className={ classNames(styles['icon'], props.classProps) }
    height="40"
    viewBox="0 0 40 40"
    width="40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 11.6665H35"
      strokeLinecap="round"
    />
    <path d="M5 20H35"
      strokeLinecap="round"
    />
    <path d="M5 28.3335H35"
      strokeLinecap="round"
    />
  </svg>
)

import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconArrow3 = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon'], props.classProps) }
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.45 6.71997L6.72998 3L3.01001 6.71997"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.72998 21V3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13.55 17.28L17.27 21L20.99 17.28"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17.27 3V21"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  )
}

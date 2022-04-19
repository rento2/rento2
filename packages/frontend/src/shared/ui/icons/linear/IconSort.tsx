import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconSort = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon'], props.classProps) }
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 7H21"
        strokeLinecap="round"
      />
      <path d="M6 12H18"
        strokeLinecap="round"
      />
      <path d="M10 17H14"
        strokeLinecap="round"
      />
    </svg>

  )
}

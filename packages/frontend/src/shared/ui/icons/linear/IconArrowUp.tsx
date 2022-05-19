import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconArrowUp = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon'], props.classProps) }
      height="9"
      viewBox="0 0 18 9"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.92 8.05001L10.4 1.53001C9.63002 0.760015 8.37002 0.760015 7.60002 1.53001L1.08002 8.05001"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
    </svg>

  )
}

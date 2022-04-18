import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconCategory = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon'], props.classProps) }
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="5"
        rx="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        width="8"
        x="2.5"
        y="2.5"
      />
      <rect height="5"
        rx="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        width="8"
        x="13.5"
        y="2.5"
      />
      <rect height="5"
        rx="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        width="8"
        x="2.5"
        y="9.5"
      />
      <rect height="5"
        rx="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        width="8"
        x="13.5"
        y="9.5"
      />
      <rect height="5"
        rx="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        width="8"
        x="2.5"
        y="16.5"
      />
      <rect height="5"
        rx="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        width="8"
        x="13.5"
        y="16.5"
      />
    </svg>

  )
}

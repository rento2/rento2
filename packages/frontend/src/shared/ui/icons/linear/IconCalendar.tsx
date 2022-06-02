import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconCalendar = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon'], props.classProps) }
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 2V5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
      <path d="M16 2V5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
      <path d="M3.5 9.08997H20.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
      <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
      <path d="M15.6947 13.7H15.7037"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15.6947 16.7H15.7037"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.9955 13.7H12.0045"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.9955 16.7H12.0045"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.29431 13.7H8.30329"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.29431 16.7H8.30329"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  )
}

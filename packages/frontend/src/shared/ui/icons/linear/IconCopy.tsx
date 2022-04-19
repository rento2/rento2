import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconCopy = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon'], props.classProps) }
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17 13.4H13.8C11.4 13.4 10.6 12.6 10.6 10.2V7L17 13.4Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.6 2H15.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 5C7 3.34 8.34 2 10 2H12.62"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 8V14.19C22 15.74 20.74 17 19.19 17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  )
}

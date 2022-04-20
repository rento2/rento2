import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconEyeSlash = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon'], props.classProps) }
      height="22"
      viewBox="0 0 22 22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.53 8.47004L8.46998 13.53C7.81998 12.88 7.41998 11.99 7.41998 11C7.41998 9.02004 9.01998 7.42004 11 7.42004C11.99 7.42004 12.88 7.82004 13.53 8.47004Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16.82 4.76998C15.07 3.44998 13.07 2.72998 11 2.72998C7.47003 2.72998 4.18003 4.80998 1.89003 8.40998C0.990027 9.81998 0.990027 12.19 1.89003 13.6C2.68003 14.84 3.60003 15.91 4.60003 16.77"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.41998 18.5301C8.55998 19.0101 9.76998 19.2701 11 19.2701C14.53 19.2701 17.82 17.1901 20.11 13.5901C21.01 12.1801 21.01 9.81005 20.11 8.40005C19.78 7.88005 19.42 7.39005 19.05 6.93005"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14.51 11.7C14.25 13.11 13.1 14.26 11.69 14.52"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.47 13.53L1 21"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 1L13.53 8.47"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  )
}

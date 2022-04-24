import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconWiFi = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon-lien'], props.classProps) }
      height="18"
      viewBox="0 0 23 18"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path clipRule="evenodd"
        d="M11.2959 1.125C6.85472 1.125 2.97652 3.53749 0.901097 7.12527L0.251892 6.74973C2.45586 2.93972 6.57617 0.375 11.2959 0.375C16.0157 0.375 20.136 2.93972 22.34 6.74973L21.6908 7.12527C19.6154 3.53749 15.7372 1.125 11.2959 1.125Z"
        fillRule="evenodd"
      />
      <path clipRule="evenodd"
        d="M10.889 6.28125C7.94182 6.28125 5.36986 7.86595 3.99405 10.2204L3.3465 9.84206C4.85254 7.26468 7.66697 5.53125 10.889 5.53125C14.1111 5.53125 16.9255 7.26468 18.4315 9.84206L17.784 10.2204C16.4082 7.86595 13.8362 6.28125 10.889 6.28125Z"
        fillRule="evenodd"
      />
      <path clipRule="evenodd"
        d="M10.889 11.4375C9.24073 11.4375 7.82382 12.2132 7.07586 13.3333L6.45215 12.9167C7.35096 11.5708 9.01199 10.6875 10.889 10.6875C12.766 10.6875 14.427 11.5708 15.3259 12.9167L14.7021 13.3333C13.9542 12.2132 12.5373 11.4375 10.889 11.4375Z"
        fillRule="evenodd"
      />
      <ellipse
        cx="10.889"
        cy="16.2188"
        rx="1.03125"
        ry="1.03125"
      />
    </svg>
  )
}

import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconHeart = (props: IIconClassProps): JSX.Element => (
  <svg className={ classNames(styles['icon'], props.classProps) }
    height="20"
    viewBox="0 0 22 20"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.62 18.8101C11.28 18.9301 10.72 18.9301 10.38 18.8101C7.48 17.8201 1 13.6901 1 6.6901C1 3.6001 3.49 1.1001 6.56 1.1001C8.38 1.1001 9.99 1.9801 11 3.3401C12.01 1.9801 13.63 1.1001 15.44 1.1001C18.51 1.1001 21 3.6001 21 6.6901C21 13.6901 14.52 17.8201 11.62 18.8101Z"
      fillOpacity="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

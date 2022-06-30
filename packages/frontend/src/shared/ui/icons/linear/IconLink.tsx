import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export function IconLink (props: IIconClassProps): JSX.Element {
  return (
    <svg
      className={ classNames(styles['icon'], props.classProps) }
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.13636 7.86364L2.5 10.5C0.567003 12.433 0.567003 15.567 2.5 17.5V17.5C4.433 19.433 7.567 19.433 9.5 17.5L12.1364 14.8636M7.86364 5.13636L10.5 2.5C12.433 0.567003 15.567 0.567004 17.5 2.5V2.5C19.433 4.433 19.433 7.567 17.5 9.5L14.8636 12.1364M6.59091 13.4091L13.4091 6.59091"
      />
    </svg>
  )
}

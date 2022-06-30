import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconMapPin = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon-map'], props.classProps) }
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path clipRule="evenodd"
        d="M7.99996 1.33331C10.8 1.33331 13.3333 3.51516 13.3333 6.88957C13.3333 9.04432 12.0333 11.2452 8.77329 14.1656C8.52013 14.8727 7.47272 14.8637 7.21996 14.1656C3.96663 11.2452 2.66663 9.04432 2.66663 6.88957C2.66663 3.51516 5.19996 1.33331 7.99996 1.33331ZM7.99997 8.78685C9.10454 8.78685 9.99997 7.87675 9.99997 6.75407C9.99997 5.6314 9.10454 4.72129 7.99997 4.72129C6.8954 4.72129 5.99997 5.6314 5.99997 6.75407C5.99997 7.87675 6.8954 8.78685 7.99997 8.78685Z"
        fillRule="evenodd"
      />
    </svg>

  )
}

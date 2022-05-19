import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconBath = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon-lien'], props.classProps) }
      height="19"
      viewBox="0 0 24 19"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className={ styles['icon-lien-stroke'] }
        d="M1.25 10.5H22.75V13.5C22.75 15.433 21.183 17 19.25 17H4.75C2.817 17 1.25 15.433 1.25 13.5V10.5Z"
      />
      <rect className={ styles['icon-lien-stroke'] }
        height="2"
        rx="1"
        width="23"
        x="0.5"
        y="8.25"
      />
      <path className={ styles['icon-lien-stroke'] }
        d="M4.86038 18.5L4.44371 17.25H5.5V18.5H4.86038Z"
      />
      <path className={ styles['icon-lien-stroke'] }
        d="M18.5 17.25H19.5563L19.1396 18.5H18.5V17.25Z"
      />
      <path clipRule="evenodd"
        d="M14.4672 3.31581C15.8534 3.31581 17.0403 4.17369 17.5243 5.38806C17.2101 5.60436 16.8964 5.90132 16.5935 6.30528L17.3934 6.90528C17.8135 6.3452 18.2181 6.09257 18.5572 5.97045C18.9059 5.84491 19.2222 5.84213 19.5198 5.84213C20.6389 5.84213 21.5461 6.74934 21.5461 7.86844H22.5461C22.5461 6.19705 21.1912 4.84213 19.5198 4.84213L19.507 4.84213C19.248 4.84209 18.865 4.84204 18.4305 4.96221C17.7858 3.40872 16.2546 2.31581 14.4672 2.31581C12.9101 2.31581 11.5477 3.14522 10.7962 4.38543C10.2309 4.22562 9.76075 4.21055 9.4145 4.21055C7.04549 4.21055 5.12503 6.13101 5.12503 8.50002H6.12503C6.12503 6.6833 7.59778 5.21055 9.4145 5.21055C9.92547 5.21055 10.7112 5.24176 11.7226 5.91603L12.2773 5.08398C12.093 4.96113 11.9139 4.85549 11.7403 4.76468C12.3318 3.89016 13.3328 3.31581 14.4672 3.31581Z"
        fillRule="evenodd"
      />
      <circle className={ styles['icon-lien-stroke'] }
        cx="8.625"
        cy="1.375"
        r="0.625"
      />
      <path className={ styles['icon-lien-stroke'] }
        d="M4 5.5C4 6.05229 3.55228 6.5 3 6.5C2.44772 6.5 2 6.05229 2 5.5C2 4.94772 2.44772 4.5 3 4.5C3.55228 4.5 4 4.94772 4 5.5Z"
      />
    </svg>
  )
}

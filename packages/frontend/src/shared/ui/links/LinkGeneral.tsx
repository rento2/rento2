import classNames from 'classnames'
import { FC } from 'react'
import Link from 'next/link'
import styles from './LinkGeneral.module.scss'

export interface ILink {
  href?: string | undefined
  disabled?: boolean
  grade?: 'primary' | 'secondary' | 'neutral'
  full?: 'filled' | 'stroke'
  font: 'l' | 'm' | 's'
  height: '56' | '48' | '44' | '40'
  classProps?: string
  children: string
  icon?: JSX.Element
}

export const LinkGeneral: FC<ILink> = ({
  href,
  disabled = false,
  grade = 'primary',
  classProps,
  icon,
  children
}) => (
  <Link
    disabled={ disabled }
    href={ href }
  >
    <a className={ classNames(styles['link'], classProps) }>
      {icon}
      {children}
    </a>
  </Link>
)

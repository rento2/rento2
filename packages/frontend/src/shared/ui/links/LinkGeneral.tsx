import classNames from 'classnames'
import { FC } from 'react'
import Link, { LinkProps } from 'next/link'
import styles from './LinkGeneral.module.scss'

export interface ILink {
  classProps?: string | undefined
}

export const LinkGeneral: FC<LinkProps & ILink> = ({
  href,
  classProps,
  children
}) => (
  <Link
    href={ href }
  >
    <a className={ classNames(styles['link'], classProps) }>
      {children}
    </a>
  </Link>
)

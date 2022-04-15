import { FC, ReactElement } from 'react'
import classNames from 'classnames'
import styles from './SocialItem.module.scss'

interface ISocialItem {
  hrefProps: string
  iconProps: ReactElement
  titleProps: string
  classProps?: string | undefined
}

export const SocialItem: FC<ISocialItem> = ({ hrefProps, iconProps, titleProps, classProps }) => {
  return (
    <li className={ classNames(styles['item-socials'], classProps) }>
      <a
        href={ hrefProps }
        rel='noopener noreferrer'
        target='_blank'
        title={ titleProps }
      >
        {iconProps}
      </a>
    </li>
  )
}

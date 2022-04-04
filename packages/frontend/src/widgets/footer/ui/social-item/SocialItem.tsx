import { FC, ReactElement } from 'react'
import styles from './SocialItem.module.scss'

interface ISocialItem {
  hrefProps: string
  iconProps: ReactElement
  titleProps: string
}

export const SocialItem: FC<ISocialItem> = ({ hrefProps, iconProps, titleProps }) => {
  return (
    <li className={ styles['item-socials'] }>
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

import Link from 'next/link'
import { FC } from 'react'
import styles from './DocsItem.module.scss'

interface IDocsItem {
  hrefProps: string
  textProps: string
}

export const DocsItem: FC<IDocsItem> = ({ hrefProps, textProps }) => {
  return (
    <li className={ styles['item'] }>
      <Link href={ hrefProps }>
        <a
          className={ styles['item__link'] }
          target='_blank'
        >
          {textProps}
        </a>
      </Link>
    </li>
  )
}

import { useRouter } from 'next/dist/client/router'
import { LinkGeneral } from '@shared/ui'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './HeadMenu.module.scss'
import { IPropsMenu } from '../../lib/type/IPropsMenu'

interface IHeadMenuTitleProps {
  btnOnClick: () => void
  isOpen: boolean
  data: IPropsMenu[]
  chapter?: string
}

export const HeadMenuTitle = ({ btnOnClick, isOpen, data, chapter }: IHeadMenuTitleProps): JSX.Element => {
  const [titleText, setTitleText] = useState('')
  const router = useRouter()
  useEffect(() => {
    data.map((item) => {
      if (router.pathname === item.href) {
        return setTitleText(item.title)
      }
      return 'Нет такой страницы'
    })
  }, [data, router.pathname])

  return (
    (chapter != null && isOpen)
      ? (
        <h3 className={ classNames(styles['title__text'], styles['agreements-title']) }
          onClick={ btnOnClick }
        >
          <LinkGeneral classProps={ styles['left-arrow'] }
            href="/docs/agreements"
          >
            {chapter}
          </LinkGeneral>
        </h3>

        )
      : (
        <h3 className={ styles['title__text'] }>
          <button className={ classNames(styles['title'], isOpen ? styles['active'] : '') }
            onClick={ btnOnClick }
          >
            {titleText}

          </button>
        </h3>
        )
  )
}

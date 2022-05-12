import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import style from './HeadMenu.module.scss'
import { IPropsMenu } from '../../lib/type/IPropsMenu'

export const HeadMenuTitle = ({ btnOnClick, isOpen, data }: {btnOnClick: () => void, isOpen: boolean, data: IPropsMenu[]}): JSX.Element => {
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
    <button className={ classNames(style['title'], style['title__text'], isOpen ? style['active'] : '') }
      onClick={ btnOnClick }
    >
      {titleText}
    </button>
  )
}

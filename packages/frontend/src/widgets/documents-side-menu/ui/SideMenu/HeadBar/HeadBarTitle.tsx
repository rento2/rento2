import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

import style from './HeadBar.module.scss'
import { IPropsMenu } from '../type/IPropsMenu'

const HeadBarTitle = ({ btnOnClick, isOpen, data }: {btnOnClick: () => void, isOpen: boolean, data: IPropsMenu[]}): JSX.Element => {
  const [titleText, setTitleText] = useState('')
  const router = useRouter()
  useEffect(() => {
    data.forEach((dats) => {
      Object.entries([dats]).map((item) => {
        if (router.pathname === item[1].href) {
          return setTitleText(item[1].title)
        }
        return 'Нет такой страницы'
      })
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
export default HeadBarTitle

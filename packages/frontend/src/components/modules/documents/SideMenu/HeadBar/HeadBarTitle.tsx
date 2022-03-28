import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

import style from './HeadBar.module.scss'

const HeadBarTitle = ({ btnOnClick, isOpen }: {btnOnClick: () => void, isOpen: boolean}): JSX.Element => {
  const [titleText, setTitleText] = useState('')
  const router = useRouter()
  function headTitle (router: string): string {
    switch (router) {
      case '/docs/faq':
        return 'частые вопросы'
      case '/docs/privacy':
        return 'Политика обработки данных'
      case '/docs/rules':
        return 'Пользовательское соглашение'
      case '/docs/agreements':
        return 'Образцы документов'
      default:
        return 'нет такой страницы'
    }
  }

  useEffect(() => {
    setTitleText(headTitle(router.pathname))
  }, [router.pathname])

  return (
    <button className={ classNames(style['title'], style['title__text'], isOpen ? style['active'] : '') }
      onClick={ btnOnClick }
    >
      {titleText}
    </button>
  )
}
export default HeadBarTitle

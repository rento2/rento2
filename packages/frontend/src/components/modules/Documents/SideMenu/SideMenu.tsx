import Link from 'next/dist/client/link'
import style from './SideMenu.module.scss'

export default function SideMenu (): JSX.Element {
  return (
    <div className={ style['border'] }>
      <ul className={ style['list'] }>
        <li className={ style['item'] }>
          <Link href='/docs/faq'>
            <a className={ style['item'] }>
              Частые вопросы
            </a>
          </Link>
        </li>
        <li>
          <Link href='/docs/privacy'>
            <a className={ style['item'] }>
              Политика обработки персональных данных
            </a>
          </Link>
        </li>
        <li>
          <Link href='/docs/agreements'>
            <a className={ style['item'] }>
              Образцы документов
            </a>
          </Link>
        </li>
        <li>
          <Link href='/docs/rules'>
            <a className={ style['item'] }>
              Пользовательское соглашение
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

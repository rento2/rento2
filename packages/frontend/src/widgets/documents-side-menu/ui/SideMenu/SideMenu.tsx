import Link from 'next/dist/client/link'
import { dataMenu } from '@widgets/documents-side-menu/model/dataMenu'
import style from './SideMenu.module.scss'

export function SideMenu (): JSX.Element {
  return (
    <div className={ style['border'] }>
      <ul>

        {
            dataMenu.map((item, indx) => (
              <li key={ indx + 1 }>
                <Link key={ indx }
                  href={ item.href }
                >
                  <a className={ style['item'] }>
                    {item.title}
                  </a>
                </Link>
              </li>
            )
            )}

      </ul>
    </div>
  )
}

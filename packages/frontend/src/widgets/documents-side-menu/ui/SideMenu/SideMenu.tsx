import Link from 'next/dist/client/link'
import { IPropsMenu } from './type/IPropsMenu'
import style from './SideMenu.module.scss'

export default function SideMenu ({ dataMenu }: {dataMenu: IPropsMenu[]}): JSX.Element {
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

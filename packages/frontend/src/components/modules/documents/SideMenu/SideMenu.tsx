/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/dist/client/link'
import style from './SideMenu.module.scss'
import { IPropsMenu } from './type/IPropsMenu'

export default function SideMenu ({ dataMenu }: {dataMenu: IPropsMenu[]}): JSX.Element {
  return (
    <div className={ style['border'] }>
      <ul>
        <li>
          {
            dataMenu.map((item, indx) => (
              <Link key={ indx }
                href={ item.href }
              >
                <a className={ style['item'] }>
                  {item.title}
                </a>
              </Link>
            )
            )}

        </li>
      </ul>
    </div>
  )
}

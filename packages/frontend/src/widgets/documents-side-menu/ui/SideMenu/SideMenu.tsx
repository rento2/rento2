import { dataMenu } from '@widgets/documents-side-menu/model/dataMenu'
import { LinkGeneral } from '@shared/ui'
import style from './SideMenu.module.scss'
import classNames from 'classnames'

export function SideMenu ({ activeItem }: {activeItem: string}): JSX.Element {
  return (
    <div className={ style['border'] }>
      <ul>
        {
            dataMenu.map((item, indx) => (
              <li key={ indx + 1 }>
                <LinkGeneral key={ indx }
                  classProps={ classNames(style['item'], (item.title === activeItem) ? style['active'] : '') }
                  href={ item.href }
                >
                  {item.title}
                </LinkGeneral>
              </li>
            )
            )}
      </ul>
    </div>
  )
}

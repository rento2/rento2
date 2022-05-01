import { LinkGeneral } from '@shared/ui'
import styles from './SideMenu.module.scss'
import classNames from 'classnames'
import { IPropsMenu } from '@widgets/documents-side-menu'

export function SideMenu ({ activeItem, data }: {activeItem: string, data: IPropsMenu[]}): JSX.Element {
  return (
    <div className={ styles['border'] }>
      <ul>
        {
            data.map((item, indx) => (
              <li key={ indx + 1 }>
                {item.chapter != null
                  ? (
                    <LinkGeneral classProps={ styles['chapter'] }
                      href="/docs/agreements"
                    >
                      {item.chapter}
                    </LinkGeneral>
                    )
                  : null}
                <LinkGeneral key={ indx }
                  classProps={ classNames(styles['item'], (item.title === activeItem) ? styles['active'] : '') }
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

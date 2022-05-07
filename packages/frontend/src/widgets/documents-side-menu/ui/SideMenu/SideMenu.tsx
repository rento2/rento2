import { LinkGeneral } from '@shared/ui'
import { IPropsAgreements, IPropsMenu } from '@widgets/documents-side-menu'
import classNames from 'classnames'
import AgreementsSideMenu from './AgreementsSideMenu.tsx/AgreementsSideMenu'
import styles from './SideMenu.module.scss'
interface ISideMenuProps {
  activeItem: string
  data: IPropsMenu[] | IPropsAgreements
}

export function SideMenu ({ activeItem, data }: ISideMenuProps): JSX.Element {
  return (

    <>
      {!Array.isArray(data)
        ? (
          <AgreementsSideMenu activeItem={ activeItem }
            data={ data }
          />
          )

        : (
          <div className={ styles['border'] }>
            <ul>
              {data.map((item, idx) => (
                <li key={ idx }>
                  <LinkGeneral
                    classProps={ classNames(styles['item'], (item.title === activeItem) ? styles['active'] : '') }
                    href={ item.href }
                  >
                    {item.title}
                  </LinkGeneral>
                </li>
              ))}
            </ul>
          </div>
          )
          }

    </>
  )
}

import { LinkGeneral } from '@shared/ui/links/LinkGeneral'
import { IPropsAgreements } from '@widgets/documents-side-menu'
import classNames from 'classnames'
import styles from './AgreementsSideMenu.module.scss'
interface IAgreementsSideMenuProps {
  data: IPropsAgreements
  activeItem: string
}

export const AgreementsSideMenu = ({ data, activeItem }: IAgreementsSideMenuProps): JSX.Element => {
  return (
    <div className={ styles['container-agreements'] }>
      <ul>
        <li className={ styles['comback-buton'] }>
          <LinkGeneral classProps={ styles['left-arrow'] }
            href="/docs/agreements"
          >
            {data.chapter}
          </LinkGeneral>
        </li>
        {data.listMenu.map((item, idx) => (
          <li key={ idx }>
            <LinkGeneral
              classProps={ classNames([styles.item], { [styles.active]: item.title === activeItem }) }
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
export default AgreementsSideMenu

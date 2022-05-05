import { LinkGeneral } from '@shared/ui/links/LinkGeneral'
import { IPropsAgreements } from '@widgets/documents-side-menu'
import classNames from 'classnames'
import styles from './AgreementsSideMenu.module.scss'

export const AgreementsSideMenu = ({ data, activeItem }: {data: IPropsAgreements, activeItem: string}): JSX.Element => {
  return (

    <div className={ styles['container-agreements'] }>
      <ul>
        <LinkGeneral
          href="/docs/agreements"
        >
          <li className={ styles['comback-buton'] }>

            {data.chapter}

          </li>
        </LinkGeneral>
        {data.listMenu.map((item, idx) => (
          <li key={ idx + 1 }>
            <LinkGeneral key={ idx }
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

export default AgreementsSideMenu

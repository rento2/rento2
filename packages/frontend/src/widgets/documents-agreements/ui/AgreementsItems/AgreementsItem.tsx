import { LinkGeneral } from '@shared/ui'
import { IPropsMenu } from '@widgets/documents-side-menu'
import styles from './AgreementsItem.module.scss'

export function ItemAgreements ({ title, data }: {title: string, data: IPropsMenu[] }): JSX.Element {
  return (
    <>
      <h3 className={ styles['title-container'] }>
        {title}
      </h3>
      <ul>
        {data.map((contract, idx) => {
          return (
            <li key={ idx }
              className={ styles['item-container'] }
            >
              <LinkGeneral classProps={ styles['item-container__link'] }
                href={ contract.href }
              >
                {contract.title}
              </LinkGeneral>
            </li>
          )
        })}
      </ul>
    </>
  )
}

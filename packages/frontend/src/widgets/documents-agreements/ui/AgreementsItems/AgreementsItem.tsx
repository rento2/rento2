import { LinkGeneral } from '@shared/ui'
import { IPropsMenu } from '@widgets/documents-side-menu'
import style from './AgreementsItem.module.scss'

export function ItemAgreements ({ title, data }: {title: string, data: IPropsMenu[] }): JSX.Element {
  return (
    <>
      <h3 className={ style['title-container'] }>
        {title}
      </h3>
      <ul>
        {data.map((contract, idx) => {
          return (
            <li key={ idx }
              className={ style['list-container'] }
            >
              <LinkGeneral classProps={ style['a'] }
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

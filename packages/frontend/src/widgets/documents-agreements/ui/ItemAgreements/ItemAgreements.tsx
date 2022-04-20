import { IPropsMenu } from '@widgets/documents-side-menu'
import Link from 'next/link'
import style from './ItemAgreements.module.scss'

export function ItemAgreements ({ title, data }: {title: string, data: IPropsMenu[] }): JSX.Element {
  return (
    <div>
      <h3 className={ style['title-container'] }>
        {title}
      </h3>
      <ul>
        {data.map((contract, idx) => {
          return (
            <li key={ idx }
              className={ style['list-container'] }
            >
              <Link href={ contract.href }>
                <a>

                  {contract.title}

                </a>
              </Link>

            </li>
          )
        })}
      </ul>
    </div>
  )
}

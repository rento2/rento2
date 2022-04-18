
import Link from 'next/link'
import { dataOwners } from '../model/dataOwners '
import style from './O&T.module.scss'

export function Owners ({ title }: {title: string}): JSX.Element {
  return (
    <div>
      <p className={ style['title-container'] }>
        {title}
      </p>
      <ul>
        {dataOwners.map((contract, idx) => {
          return (
            <li key={ idx }
              className={ style['list-container'] }
            >
              <button className={ style['list-button'] }
                type='button'
              >
                <Link href={ contract.href }>
                  <a>

                    {contract.title}

                  </a>
                </Link>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

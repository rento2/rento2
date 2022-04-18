import Link from 'next/link'
import { dataTenants } from '../model/dataTenants'
import style from './O&T.module.scss'

export function Tenants ({ title }: {title: string}): JSX.Element {
  return (
    <div>
      <h3 className={ style['title-container'] }>
        {title}
      </h3>
      <ul>
        {dataTenants.map((contract, idx) => {
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

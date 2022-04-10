import Link from 'next/link'
import { IPropsMenu } from '../../lib/type/IPropsMenu'
import style from './HeadMenu.module.scss'

export const HeadMenuItem = ({ data }: {data: IPropsMenu }): JSX.Element => {
  return (
    <li className={ style['menu'] }>
      <Link href={ data.href }>
        <a>
          {data.title}
        </a>
      </Link>
    </li>

  )
}

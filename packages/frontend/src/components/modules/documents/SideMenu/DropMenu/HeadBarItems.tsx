import Link from 'next/link'
import { IPropsMenu } from '../type/IPropsMenu'
import style from './HeadBar.module.scss'

const HeadBarItem = ({ data }: {data: IPropsMenu}): JSX.Element => (
  <li className={ style['menu'] }>
    <Link href={ data.href }>
      {data.title}
    </Link>
  </li>
)

export default HeadBarItem

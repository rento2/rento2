import Link from 'next/link'
import { IPropsMenu } from '../type/IPropsMenu'

const HeadBar = ({ dataMenu }: {dataMenu: IPropsMenu[]}): JSX.Element => {
  return (
    <div>
      <h5>
        Частые вопросы
      </h5>
      { dataMenu.map((item, idx) => (
        <ul key={ idx }>
          <li>
            <Link href={ item.href }>
              {item.title}
            </Link>
          </li>
        </ul>
      )) }
    </div>
  )
}

export default HeadBar

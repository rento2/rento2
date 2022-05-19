import styles from './LongInfoDetails.module.scss'
import classNames from 'classnames'
import { IDetails } from '@widgets/long-info/lib/types/IDetails'

export default function LongInfoDetails ({ details }: { details: IDetails }): JSX.Element {
  return (
    <ul className={ classNames(styles['list']) }>
      <li className={ classNames(styles['item']) }>
        Ком. платежи:
        {' '}
        {details.communal}
      </li>
      <li className={ classNames(styles['item']) }>
        Депозит:
        {' '}
        {details.deposit}
      </li>
      <li className={ classNames(styles['item']) }>
        Комиссия:
        {' '}
        {details.commission}
      </li>
    </ul>
  )
}

import styles from '@modules/LongInfo/LongInfoDetails.module.scss'
import classNames from 'classnames'

export default function LongInfoDetails ({
  details
}: {
  details: {
    communal: String
    deposit: String
    commission: String
  }
}): JSX.Element {
  return (
    <ul className={ classNames(styles['container']) }>
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

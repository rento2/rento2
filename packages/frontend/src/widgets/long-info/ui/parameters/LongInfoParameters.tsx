import { IParameters } from '@widgets/long-info/lib/types/IParameters'
import classNames from 'classnames'
import styles from './LongInfoParameters.module.scss'

export default function LongInfoParameters ({ parameters }: { parameters: IParameters }): JSX.Element {
  return (
    <ul className={ classNames(styles['list']) }>
      <li className={ classNames(styles['item']) }>
        Комнат:
        {parameters.rooms}
      </li>
      <li className={ classNames(styles['item']) }>
        Площадь:
        {parameters.area}
      </li>
      <li className={ classNames(styles['item']) }>
        Этаж:
        {parameters.floor}
      </li>
    </ul>
  )
}

import classNames from 'classnames'
import styles from '@modules/LongInfo/LongInfoParameters.module.scss'

export default function LongInfoParameters ({ parameters }: {
  parameters: {
    rooms: String | Number
    area: String | Number
    floor: String | Number
  }
}): JSX.Element {
  return (
    <ul className={ classNames(styles['container']) }>
      <li className={ classNames(styles['item']) }>
        Комнат:
        {' '}
        {parameters.rooms}
      </li>
      <li className={ classNames(styles['item']) }>
        Площадь:
        {' '}
        {parameters.area}
      </li>
      <li className={ classNames(styles['item']) }>
        Этаж:
        {' '}
        {parameters.floor}
      </li>
    </ul>
  )
}

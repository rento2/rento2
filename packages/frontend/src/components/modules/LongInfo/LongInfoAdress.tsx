import MetroIcon from '@elements/icons/MetroIcon'
import WalkingIcon from '@elements/icons/WalkingIcon'
import styles from '@modules/LongInfo/LongInfoAdress.module.scss'
import classNames from 'classnames'

interface IMetro {
  name: String
  time: String
  lineColor: string
}

export default function LongInfoAdress ({
  adress
}: {
  adress: {
    street: String
    metro?: IMetro[]
  }
}): JSX.Element {
  return (
    <ul className={ classNames(styles['container']) }>
      <li className={ classNames(styles['item']) }>
        {adress.street}
      </li>
      {adress.metro !== null ??
        adress.metro?.map((m, i) => {
          return (
            <li key={ i }
              className={ classNames(styles['item'], styles['metro']) }
            >
              <div className={ styles['wrapper'] }>
                <MetroIcon color={ m.lineColor } />
                <p className={ classNames(styles['metro-name']) }>
                  {m.name}
                </p>
              </div>

              <div className={ styles['wrapper'] }>
                <WalkingIcon />
                <span className={ classNames(styles['metro-time']) }>
                  {m.time}
                </span>
              </div>
            </li>
          )
        })}
    </ul>
  )
}

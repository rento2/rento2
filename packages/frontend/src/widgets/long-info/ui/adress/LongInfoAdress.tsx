import { IconMetro, IconWalking } from '@shared/ui/icons/index'

import styles from './LongInfoAdress.module.scss'
import classNames from 'classnames'
import { IAdress } from '@widgets/long-info/lib/types/IAdress'

export default function LongInfoAdress ({
  adress
}: {
  adress: IAdress
}): JSX.Element {
  return (
    <ul className={ classNames(styles['list']) }>
      <li className={ classNames(styles['item']) }>
        {adress.street}
      </li>
      {(adress.metro != null)
        ? adress.metro?.map((metro, i) => {
          return (
            <li key={ i }
              className={ classNames(styles['item'], styles['metro']) }
            >
              <div className={ styles['wrapper'] }>
                <IconMetro classProps={ classNames(styles[metro.iconClass]) } />
                <p className={ classNames(styles['metro-name']) }>
                  {metro.name}
                </p>
              </div>

              <div className={ styles['wrapper'] }>
                <IconWalking classProps={ classNames(styles['icon-walking']) } />
                <span className={ classNames(styles['metro-time']) }>
                  {metro.time}
                </span>
              </div>
            </li>
          )
        })
        : ''}
    </ul>
  )
}

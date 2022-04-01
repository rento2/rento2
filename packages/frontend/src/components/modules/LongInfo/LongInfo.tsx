import { LongInfoButton } from './LongInfoButton'
import styles from '@modules/LongInfo/LongInfo.module.scss'
import classNames from 'classnames'
import LocationIcon from '@elements/icons/LocationIcon'
import LongInfoDetails from './LongInfoDetails'
import LongInfoParameters from './LongInfoParameters'
import LongInfoAdress from './LongInfoAdress'
import FavIcon from '@elements/icons/FavIcon'
import LinkIcon from '@elements/icons/LinkIcon'
import CallIcon from '@elements/icons/CallIcon'
import { useEffect, useState } from 'react'

interface IMetro {
  name: String
  time: String
  lineColor: string
}

interface IAdress {
  street: String
  metro?: IMetro[]
}

export default function LongInfo ({
  price,
  details,
  parameters,
  adress
}: {
  price: String
  details: {
    communal: String
    deposit: String
    commission: String
  }
  parameters: {
    rooms: String | Number
    area: String | Number
    floor: String | Number
  }
  adress: IAdress
}): JSX.Element {
  const [innerWidth, setInnerWidth] = useState<Number>(0)

  useEffect(() => {
    setInnerWidth(window.innerWidth)
  }, [])

  // window.addEventListener('resize', () => {
  //   setInnerWidth(window.innerWidth)
  // })

  return (
    <div className={ classNames(styles['container']) }>
      <div className={ classNames(styles['actions']) }>
        <button className={ classNames(styles['actions-btn']) }>
          <FavIcon />
        </button>
        <button className={ classNames(styles['actions-btn']) }>
          <LinkIcon />
        </button>
      </div>

      <h3 className={ classNames(styles['price']) }>
        {price.toString() + ' / месяц'}
      </h3>

      <LongInfoDetails details={ details } />
      <LongInfoParameters parameters={ parameters } />

      <a className={ classNames(styles['location']) }>
        Расположение
        <LocationIcon />
      </a>

      <LongInfoAdress adress={ adress } />

      <div className={ classNames(styles['buttons']) }>
        <LongInfoButton
          // text="Позвонить"
          classProp={ classNames(styles['btn_gray'], styles['btn']) }
          onClick={ () => {} }
        >
          {innerWidth > 480 ? CallIcon() : 'Позвонить'}

        </LongInfoButton>
        <LongInfoButton
          classProp={ classNames(styles['btn_orange'], styles['btn']) }
          text="Записаться на просмотр"
          onClick={ () => {} }
        />
      </div>
    </div>
  )
}

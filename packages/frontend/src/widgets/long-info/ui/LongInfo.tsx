import classNames from 'classnames'
import { IconLocation, IconCall } from '@shared/ui/icons/index'
import LongInfoDetails from './details/LongInfoDetails'
import LongInfoParameters from './parameters/LongInfoParameters'
import LongInfoAdress from './adress/LongInfoAdress'

import { ButtonGeneral } from '@shared/ui'
import { useWindowDimensions } from '@shared/lib'
import styles from './LongInfo.module.scss'
import { IAdress } from '../lib/types/IAdress'
import { IParameters } from '../lib/types/IParameters'
import { IDetails } from '../lib/types/IDetails'

export function LongInfo ({
  price,
  details,
  parameters,
  adress
}: {
  price: string
  details: IDetails
  parameters: IParameters
  adress: IAdress
}): JSX.Element {
  const { widthWindow } = useWindowDimensions()

  return (
    <div className={ classNames(styles['container']) }>
      <div className={ classNames(styles['actions'], 'flex-center') } />

      <p className={ classNames(styles['price']) }>
        {`${price} / месяц`}
      </p>

      <LongInfoDetails details={ details } />
      <LongInfoParameters parameters={ parameters } />

      <a className={ classNames(styles['location']) }
        href="#"
      >
        Расположение
        <IconLocation classProps={ classNames(styles['icon-location']) } />
      </a>

      <LongInfoAdress adress={ adress } />

      <div className={ classNames(styles['buttons']) }>
        <ButtonGeneral
          classProps={ classNames(styles['btn'], styles['btn_first']) }
          font="m"
          full="stroke"
          height="44"
          icon={
            widthWindow >= 480
              ? <IconCall classProps={ classNames(styles['icon-call']) } />
              : <div />
          }
          text={ widthWindow < 480 ? 'Позвонить' : '' }
          onClick={ () => {} }
        />
        <ButtonGeneral
          classProps={ classNames(styles['btn'], styles['btn_last']) }
          font="m"
          height="44"
          text="Записаться на просмотр"
          onClick={ () => {} }
        />
      </div>
    </div>
  )
}

import classNames from 'classnames'
import { IconLocation, IconCallOutgoing } from '@shared/ui/index'
import LongInfoDetails from './details/LongInfoDetails'
import LongInfoParameters from './parameters/LongInfoParameters'
import LongInfoAdress from './adress/LongInfoAdress'

import { ButtonGeneral } from '@shared/ui'
import { useWindowDimensions } from '@shared/lib'
import { IAdress } from '@widgets/long-info/lib/types/IAdress'
import { IParameters } from '@widgets/long-info/lib/types/IParameters'
import { IDetails } from '@widgets/long-info/lib/types/IDetails'
import styles from './LongInfo.module.scss'

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
          full="filled"
          grade='neutral'
          height="44"
          onClick={ () => {} }
        >
          {widthWindow >= 480
            ? (
              <IconCallOutgoing classProps={ classNames(styles['icon-call']) } />
              )
            : (
                'Позвонить'
              )}
        </ButtonGeneral>
        <ButtonGeneral
          classProps={ classNames(styles['btn'], styles['btn_last']) }
          font="m"
          height="44"
          onClick={ () => {} }
        >
          Записаться на просмотр
        </ButtonGeneral>
      </div>
    </div>
  )
}

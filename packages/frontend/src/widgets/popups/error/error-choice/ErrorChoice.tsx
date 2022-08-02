import { ButtonGeneral } from '@shared/ui'
import classNames from 'classnames'

import style from './ErrorChoice.module.scss'

export const ErrorChoice = (props: {close: () => void, openMassage: () => void}): JSX.Element => {
  return (
    <div className={ style.error }>
      <p className={ style.error__title }>
        Сообщить об ошибке
      </p>
      <ButtonGeneral
        font="s"
        grade='neutral'
        height="40"
        onClick={ () => props.close() }
      >
        Отправить без сообщения
      </ButtonGeneral>
      <ButtonGeneral
        classProps={ classNames(style.secondary_btn) }
        font="s"
        grade='secondary'
        height="40"
        onClick={ () => props.openMassage() }
      >
        Написать сообщение
      </ButtonGeneral>
    </div>
  )
}

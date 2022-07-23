import { ModalBase, ButtonGeneral } from '@shared/ui'
import classNames from 'classnames'

import style from './ErrorChoice.module.scss'

export const ErrorChoice = (): JSX.Element => {
  function handleCloseModal (): void {

  }
  return (
    <ModalBase
      isOpen={ true }
      isSwipe={ true }
      translate="bottom"
      onClose={ handleCloseModal }
    >
      <div className={ style.error }>
        <p className={ style.error__title }>
          Сообщить об ошибке
        </p>
        <ButtonGeneral
          font="s"
          grade='neutral'
          height="40"
        >
          Отправить без сообщения

        </ButtonGeneral>
        <ButtonGeneral
          classProps={ classNames(style.secondary_btn) }
          font="s"
          grade='secondary'
          height="40"
        >
          Написать сообщение
        </ButtonGeneral>
      </div>
    </ModalBase>
  )
}

import { ButtonGeneral, ModalBase } from '@shared/ui'
// import { useState } from 'react'
import style from './ErrorBackend.module.scss'

export const ErrorBackend = (): JSX.Element => {
  // const [open, isOpen] = useState<boolean>(true)

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
        <h1 className={ style.error__title }>
          Что-то пошло не так
        </h1>
        <p className={ style.error__description }>
          Скоро всё исправим.
          <br />
          Попробуйте ещё раз немного позже.
        </p>
        <ButtonGeneral
          font="s"
          grade='neutral'
          height="40"
        >
          Сообщить об ошибке

        </ButtonGeneral>
      </div>
    </ModalBase>
  )
}

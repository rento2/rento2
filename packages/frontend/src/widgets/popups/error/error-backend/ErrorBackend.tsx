import { ButtonGeneral, ModalBase } from '@shared/ui'
import style from './ErrorBackend.module.scss'

export const ErrorBackend = (): JSX.Element => {
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
          Что-то пошло не так
        </p>
        <div className={ style.error__description }>
          <p className={ style.error__description_str1 }>
            Скоро всё исправим.
          </p>
          <p className={ style.error__description_str2 }>
            Попробуйте ещё раз немного позже.
          </p>
        </div>
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

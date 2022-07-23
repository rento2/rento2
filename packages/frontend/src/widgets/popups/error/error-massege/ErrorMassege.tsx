import { ModalBase, ButtonGeneral } from '@shared/ui'
import classNames from 'classnames'
import styles from './ErrorMassege.module.scss'

export const ErrorMassage = (): JSX.Element => {
  function handleCloseModal (): void {

  }
  return (
    <ModalBase
      isOpen={ true }
      isSwipe={ true }
      translate="bottom"
      onClose={ handleCloseModal }
    >
      <div className={ styles.error }>
        <p className={ styles.error__title }>
          Сообщение
        </p>
        <form action="?error=massege"
          method='post'
        >
          <textarea
            className={ styles.input }
            placeholder='Опишите ошибку'
          />

          <ButtonGeneral
            classProps={ classNames(styles.secondary_btn) }
            font="s"
            grade='secondary'
            height="40"
            type="submit"
          >
            Сообщить об ошибке

          </ButtonGeneral>
        </form>
      </div>
    </ModalBase>
  )
}

import { ButtonGeneral } from '@shared/ui'
import classNames from 'classnames'
import styles from './ErrorMassege.module.scss'

export const ErrorMassage = (props: { openThank: () => void}): JSX.Element => {
  return (
    <div className={ styles.error }>
      <p className={ styles.error__title }>
        Сообщение
      </p>
      <form action="#"
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
          onClick={ () => props.openThank() }
        >
          Сообщить об ошибке
        </ButtonGeneral>
      </form>
    </div>
  )
}

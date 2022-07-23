import { ModalBase } from '@shared/ui'

import styles from './PageThanks.module.scss'
export const PageThanks = (): JSX.Element => {
  const handleCloseModal = (): void => {

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
          Спасибо
        </p>
        <p className={ styles.error__description }>
          Скоро всё починим
        </p>
      </div>
    </ModalBase>
  )
}

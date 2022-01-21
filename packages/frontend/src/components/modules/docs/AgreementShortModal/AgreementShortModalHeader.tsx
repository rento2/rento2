import { IconButtonClose } from '@elements/icons/IconButtonClose'
import styles from './AgreementShortModalHeader.module.scss'
import { FC } from 'react'
import classNames from 'classnames'

interface ModalHeader {
  handleHide: () => void
}

export const AgreementShortModalHeader: FC<ModalHeader> = (props) => {
  return (
    <>
      <h3 className={styles['modal__title']}>
        Прейскурант возмещения порчи имущества
      </h3>
      <button
        className={classNames(
          styles['btn-close'],
          'flex-center')}
        onClick={props.handleHide}
        type='button'
      >
        <IconButtonClose />
      </button>
    </>
  )
}

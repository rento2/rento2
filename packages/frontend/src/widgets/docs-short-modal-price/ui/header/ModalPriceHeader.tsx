import { IconButtonClose } from '@shared/ui'
import { FC } from 'react'
import classNames from 'classnames'
import styles from './ModalPriceHeader.module.scss'

interface IModalHeader {
  handleHide: () => void
}

export const ModalPriceHeader: FC<IModalHeader> = ({ handleHide }) => {
  return (
    <>
      <h3 className={ styles['modal__title'] }>
        Прейскурант возмещения порчи имущества
      </h3>
      <button
        className={ classNames(
          styles['btn-close'],
          'flex-center') }
        type='button'
        onClick={ handleHide }
      >
        <IconButtonClose />
      </button>
    </>
  )
}

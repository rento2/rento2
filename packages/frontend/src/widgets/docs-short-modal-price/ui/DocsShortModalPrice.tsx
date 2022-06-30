import classNames from 'classnames'

import { ModalBase } from '@shared/ui'
import { dataModal } from '@widgets/docs-short-modal-price/model/dataModal'
import styles from './DocsShortModalPrice.module.scss'

export const DocsShortModalPrice = ({ isShownProps, hideProps }: {isShownProps: boolean, hideProps: () => void}): JSX.Element => {
  const listBody = dataModal.map((item, index) => {
    return (
      <li
        key={ `modal-price-${index}` }
        className={ classNames(
          styles['modal__item'],
          index % 2 === 0 ? styles['modal__item_color'] : ''
        ) }
      >
        <p className={ styles['modal__cell-inner'] }>
          {item[0]}
        </p>
        <p className={ styles['modal__cell-inner'] }>
          {item[1]}
        </p>
      </li>
    )
  })

  return (
    <ModalBase
      isSwipe
      isOpen={ isShownProps }
      translate="bottom"
      onClose={ hideProps }
    >
      <>
        <h3 className={ styles['modal__title'] }>
          Прейскурант возмещения порчи имущества
        </h3>
        <ul className={ styles['modal__list'] }>
          <li className={ styles['modal__item-title'] }>
            <h3 className={ styles['modal__cell-inner'] }>
              Наименование
            </h3>
            <h3 className={ styles['modal__cell-inner'] }>
              Цена, руб
            </h3>
          </li>
          {listBody}
        </ul>
      </>
    </ModalBase>
  )
}

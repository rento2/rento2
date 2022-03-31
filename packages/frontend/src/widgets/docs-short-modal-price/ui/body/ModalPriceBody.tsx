import { dataModal } from '@widgets/docs-short-modal-price/model/dataModal'
import classNames from 'classnames'
import styles from './ModalPriceBody.module.scss'

export const ModalPriceBody = (): JSX.Element => {
  const listBody = dataModal.map((item, index) => {
    return (
      <li
        key={ `item-${index}` }
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
  )
}

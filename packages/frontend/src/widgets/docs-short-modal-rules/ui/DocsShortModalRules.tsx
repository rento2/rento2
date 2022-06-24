import classNames from 'classnames'
import { ModalBase } from '@shared/ui'
import { dataModal, dataRules, dataCleanRules } from '@widgets/docs-short-modal-rules/model/dataModal'
import styles from './DocsShortModalRules.module.scss'

interface IDocsShortModalRules {
  isShownProps: boolean
  hideProps: () => void
}

export const DocsShortModalRules = ({ isShownProps, hideProps }: IDocsShortModalRules): JSX.Element => {
  const listOfRules = dataRules.map((item, index) => {
    return (
      <li
        key={ `rules-${index}` }
        className={ styles['modal__text_list_li'] }
      >
        { item }
      </li>
    )
  })

  const listOfCleanRules = dataCleanRules.map((item, index) => {
    return (
      <li
        key={ `rules-${index}` }
        className={ styles['modal__text_list_li'] }
      >
        { item }
      </li>
    )
  })

  const listOfTicket = dataModal.map((item, index) => {
    return (
      <li
        key={ `modal-rules-${index}` }
        className={ classNames(styles['modal__item'], styles['modal__item_color']) }
      >
        <p className={ styles['modal__cell--inner'] }>
          {item.title}
        </p>
        <p className={ styles['modal__cell--inner'] }>
          {item.price}
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
      <div className={ styles['modal__body'] }>
        <h3 className={ styles['modal__title'] }>
          Правила проживания в квартире
        </h3>
        <p className={ styles['modal__text'] }>
          В наших квартирах вы можете чувствовать себя как дома, при условии что соблюдаете наши правила и условия
          договора (за несоблюдение предусмотрены штрафы).
        </p>
        <ul className={ styles['modal__text_list'] }>
          {listOfRules}
        </ul>
        <br />
        <p className={ styles['modal__text'] }>
          Также просим вас соблюдать чистоту:
        </p>
        <ul className={ styles['modal__text_list'] }>
          {listOfCleanRules}
        </ul>
        <h3 className={ styles['modal__title_sub'] }>
          Штрафы за нарушения правил проживания:
        </h3>
        <ul className={ styles['modal__list'] }>
          {listOfTicket}
        </ul>
      </div>
    </ModalBase>
  )
}

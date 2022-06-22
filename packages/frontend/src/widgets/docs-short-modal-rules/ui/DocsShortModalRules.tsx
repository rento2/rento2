import classNames from 'classnames'

import { ModalBase } from '@shared/ui'
import { dataModal } from '@widgets/docs-short-modal-rules/model/dataModal'
import styles from './DocsShortModalRules.module.scss'

export const DocsShortModalRules = ({ isShownProps, hideProps }: {isShownProps: boolean, hideProps: () => void}): JSX.Element => {
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
          Правила проживания в квартире
        </h3>
        <p className={ styles['modal__text'] }>
          В наших квартирах вы можете чувствовать себя как дома, при условии что соблюдаете наши правила и условия
          договора (за несоблюдение предусмотрены штрафы).
        </p>
        <ul className={ styles['modal__text_list'] }>
          <li>В квартирах нельзя шуметь, устраивать вечеринки и беспокоить соседей;</li>
          <li>Курение, в т.ч айкос, кальянов и электронных сигарет - запрещено;</li>
          <li>В квартире может находиться не более 4х человек (в трехкомнатных квартирах не более 6 человек);</li>
          <li>О кол-ве проживающих вы должны сообщить до момента заселения, в противном случае мы оставляем за собой право расторгнуть договор;</li>
          <li>Использовать квартиру для осуществления какой-либо коммерческой деятельности - запрещено;</li>
          <li>Обязательно закрывайте за собой дверь, в т.ч двери в общий коридор (при наличии);</li>
          <li> При выезде дождитесь менеджера или оставьте ключи в почтовом ящике.</li>
        </ul>
        <br/>
        <p className={ styles['modal__text'] }>Также просим вас соблюдать чистоту:</p>
        <ul className={ styles['modal__text_list'] }>
          <li>запрещается использование дополнительных комплектов постельного белья без согласования с менеджером;</li>
          <li>запрещается открывать хозяйственные шкафы (на них висит кодовый замок);</li>
          <li>не оставляйте пожалуйста мусор и грязную посуду при выезде;</li>
          <li>мусор нельзя оставлять у входной двери или около мусоропровода, если вы не знаете куда его выбросить - наши менеджеры обязательно подскажут;</li>
          <li>не выбрасывайте мусор/тряпки/средства личной гигиены в унитаз (рядом стоит ведро).</li>
        </ul>
        <h3 className={ styles['modal__title_sub'] }>Штрафы за нарушения правил проживания</h3>


        <ul className={ styles['modal__list'] }>
          {/*<li className={ styles['modal__item-title'] }>*/}
            {/*<h3 className={ styles['modal__cell-inner'] }>*/}
            {/*  Наименование*/}
            {/*</h3>*/}
            {/*<h3 className={ styles['modal__cell-inner'] }>*/}
            {/*  Цена, руб*/}
            {/*</h3>*/}
          {/*</li>*/}
          {listBody}
        </ul>
      </>
    </ModalBase>
  )
}

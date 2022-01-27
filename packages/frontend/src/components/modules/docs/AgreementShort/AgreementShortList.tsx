import { useModal } from '@elements/modals/hooks/useModal'
import { ModalBase } from '@elements/modals/ModalBase/ModalBase'
import { ModalSwipe } from '@elements/modals/ModalSwipe/ModalSwipe'
import { DocsList } from '@elements/lists/DocsList/DocsList'
import classNames from 'classnames'
import { agreementShortData } from './agreementShortData'
import { AgreementShortModalHeader } from '../AgreementShortModal/AgreementShortModalHeader'
import { AgreementShortModalBody } from '../AgreementShortModal/AgreementShortModalBody'
import { AgreementShortContext } from '@modules/docs/AgreementShort/AgreementShortContext'
import styles from '@modules/docs/AgreementShort.module.scss'

// TODO
// Работает через контекст. Контекст используется в кнопке AgreementShortButton, т.к. не хотела пробрасывать метод для открывания модалки через все дерево. Но може это решение не очень будут. Нужно будет смотреть, что получится, когда добавится аккордион
// Передавать компонент, который управляет аккордионом или же написать хук (???) Кнопка для аккордиона, если type = title

export const AgreementShortList = (): JSX.Element => {
  const [isShownPriceDamage, setShownPriceDamage] = useModal()
  const [isShownRules, setShownRules] = useModal()

  return (
    <AgreementShortContext.Provider value={ { setShownPriceDamage, setShownRules } }>
      <article className={ classNames(
        styles['document__page'],
        'container'
      ) }
      >
        <DocsList items={ agreementShortData } />
        <ModalSwipe
          bodyContent={ <AgreementShortModalBody /> }
          classes={ {
            dialog: classNames(styles['modal__dialog']),
            body: classNames(styles['modal__body']),
            header: classNames(styles['modal__header'])
          } }
          hide={ setShownPriceDamage }
          isShown={ isShownPriceDamage }
          labelledbyText='Modal parent'
          modalHeaderProps={ <AgreementShortModalHeader handleHide={ setShownPriceDamage } /> }
        />
        <ModalBase
          bodyContent={ <AgreementShortModalBody /> }
          headerContent={
            <div>
              <AgreementShortModalHeader handleHide={ setShownRules } />
            </div> }
          hide={ setShownRules }
          isShown={ isShownRules }
          labelledbyText='Price property damage'
        />
      </article>
    </AgreementShortContext.Provider>
  )
}

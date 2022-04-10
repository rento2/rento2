import { DocsList, DocsListContext } from '@widgets/docs-list'
import classNames from 'classnames'
import { agreementShortData } from '../model/agreementShortData'
import { DocsShortModalPrice } from '@widgets/docs-short-modal-price'
import styles from './AgreementShortList.module.scss'
import { useToggle } from '@shared/lib'

// TODO
// Работает через контекст. Контекст используется в кнопке AgreementShortButton, т.к. не хотела пробрасывать метод для открывания модалки через все дерево. Но може это решение не очень будут. Нужно будет смотреть, что получится, когда добавится аккордион
// Передавать компонент, который управляет аккордионом или же написать хук (???) Кнопка для аккордиона, если type = title

export const AgreementShortList = (): JSX.Element => {
  const [isShownPriceDamage, setShownPriceDamage] = useToggle()
  const [isShownRules, setShownRules] = useToggle()

  return (
    <DocsListContext.Provider value={ { setShownPriceDamage, setShownRules } }>
      <article className={ classNames(
        styles['document__page'],
        'container'
      ) }
      >
        <DocsList items={ agreementShortData } />
        <DocsShortModalPrice hideProps={ setShownRules }
          isShownProps={ isShownRules }
        />
        <DocsShortModalPrice hideProps={ setShownPriceDamage }
          isShownProps={ isShownPriceDamage }
        />
      </article>
    </DocsListContext.Provider>
  )
}

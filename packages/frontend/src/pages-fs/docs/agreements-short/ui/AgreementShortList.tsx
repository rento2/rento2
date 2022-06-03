import { DocsList, DocsListContext } from '@widgets/docs-list'
import { agreementShortData } from '../model/agreementShortData'
import { DocsShortModalPrice } from '@widgets/docs-short-modal-price'
import { DocumentsLayout } from '@shared/ui'
import { useWindowDimensions, useToggle } from '@shared/lib'
import { SideMenu, HeadMenu } from '@widgets/documents-side-menu'

export const AgreementShortList = (): JSX.Element => {
  const [isShownPriceDamage, setShownPriceDamage] = useToggle()
  const [isShownRules, setShownRules] = useToggle()
  const { widthWindow } = useWindowDimensions()

  return (
    <DocsListContext.Provider value={ { setShownPriceDamage, setShownRules } }>
      <article>
        <DocumentsLayout headMenu={ <HeadMenu /> }
          sideMenu={ <SideMenu /> }
          titleText="Частые вопросы"
          widthProps={ 1059 }
          widthWindowProps={ widthWindow }
        >
          <DocsList items={ agreementShortData } />
        </DocumentsLayout>

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
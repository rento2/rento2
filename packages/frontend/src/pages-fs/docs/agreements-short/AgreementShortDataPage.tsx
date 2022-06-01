import { DocumentsLayout, Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { useToggle, useWindowDimensions } from '@shared/lib'
import { DocsList, DocsListContext } from '@widgets/docs-list'
import { HeadMenu, SideMenu } from '@widgets/documents-side-menu'
import { DocsShortModalPrice } from '@widgets/docs-short-modal-price'
import { agreementShortData } from './model/agreementShortData'

export const AgreementShortDataPage = (): JSX.Element => {
  const [isShownPriceDamage, setShownPriceDamage] = useToggle()
  const [isShownRules, setShownRules] = useToggle()
  const { widthWindow } = useWindowDimensions()
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
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
    </Layout>
  )
}
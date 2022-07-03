import { DocsTitle, DocumentsLayout, Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { useToggle, useWindowDimensions } from '@shared/lib'
import { DocsList, DocsListContext } from '@widgets/docs-list'
import { dataAgreementsTenants, HeadMenu, SideMenu } from '@widgets/documents-side-menu'
import { DocsShortModalPrice } from '@widgets/docs-short-modal-price'
import { agreementShortData } from './model/agreementShortData'
import { useMemo } from 'react'
import { DocsShortModalRules } from '@widgets/docs-short-modal-rules'

const containTitle = 'Договор оферта краткосрочной аренды квартиры'
const categorySideMenu = 'Договор оферта краткосрочной аренды квартиры'

export const AgreementShortPage = (): JSX.Element => {
  const [isShownPriceDamage, setShownPriceDamage] = useToggle()
  const [isShownRules, setShownRules] = useToggle()
  const { widthWindow } = useWindowDimensions()

  const value = useMemo(() => ({ isShownPriceDamage, setShownPriceDamage, isShownRules, setShownRules }), [isShownRules, setShownRules, isShownPriceDamage, setShownPriceDamage])

  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <DocsListContext.Provider value={ value }>
        <article>
          <DocumentsLayout docTitle={ <DocsTitle containTitle={ containTitle } /> }
            headMenu={ <HeadMenu data={ dataAgreementsTenants } /> }
            sideMenu={ <SideMenu activeItem={ categorySideMenu }
              data={ dataAgreementsTenants }
            /> }
            widthProps={ 1060 }
            widthWindowProps={ widthWindow }
          >
            <DocsList items={ agreementShortData } />
          </DocumentsLayout>

          <DocsShortModalRules hideProps={ setShownRules }
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

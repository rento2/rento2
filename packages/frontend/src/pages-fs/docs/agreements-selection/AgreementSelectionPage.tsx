import { Layout, DocumentsLayout, DocsTitle } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { useWindowDimensions } from '@shared/lib'
import { DocsList } from '@widgets/docs-list'
import { dataAgreementsTenants, HeadMenu, SideMenu } from '@widgets/documents-side-menu'
import { agreementSelectionData } from './model/agreementSelectionData'

const containTitle = 'Договор на подбор помещения в аренду'
const categorySideMenu = 'Договор на подбор помещения в аренду'

export const AgreementSelectionPage = (): JSX.Element => {
  const { widthWindow } = useWindowDimensions()
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <article>
        <DocumentsLayout docTitle={ <DocsTitle containTitle={ containTitle } /> }
          headMenu={ <HeadMenu data={ dataAgreementsTenants } /> }
          sideMenu={ <SideMenu activeItem={ categorySideMenu }
            data={ dataAgreementsTenants }
          /> }
          widthProps={ 1060 }
          widthWindowProps={ widthWindow }
        >
          <DocsList items={ agreementSelectionData } />
        </DocumentsLayout>

      </article>
    </Layout>
  )
}

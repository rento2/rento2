import { Layout, DocumentsLayout, DocsTitle } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { useWindowDimensions } from '@shared/lib'
import { DocsList } from '@widgets/docs-list'
import { dataAgreementsTenants, HeadMenu, SideMenu } from '@widgets/documents-side-menu'
import { agreementServiceData } from './model/agreementServiceData'

const containTitle = 'Договор обслуживания арендуемой квартиры'
const categorySideMenu = 'Договор обслуживания арендуемой квартиры'

export const AgreementServicePage = (): JSX.Element => {
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
          <DocsList items={ agreementServiceData } />
        </DocumentsLayout>

      </article>
    </Layout>
  )
}

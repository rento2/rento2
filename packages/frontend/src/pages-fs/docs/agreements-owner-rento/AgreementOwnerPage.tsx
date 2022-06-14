import { Layout, DocumentsLayout, DocsTitle } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { useWindowDimensions } from '@shared/lib'
import { DocsList } from '@widgets/docs-list'
import { dataAgreementsOwners, HeadMenu, SideMenu } from '@widgets/documents-side-menu'
import { agreementOwnerData } from './model/agreementOwnerData'

const containTitle = 'Договор на поиск арендаторов'
const categorySideMenu = 'Договор между собственником и Rento'

export const AgreementOwnerPage = (): JSX.Element => {
  const { widthWindow } = useWindowDimensions()
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <article>
        <DocumentsLayout docTitle={ <DocsTitle containTitle={ containTitle } /> }
          headMenu={ <HeadMenu data={ dataAgreementsOwners } /> }
          sideMenu={ <SideMenu activeItem={ categorySideMenu }
            data={ dataAgreementsOwners }
          /> }
          widthProps={ 1060 }
          widthWindowProps={ widthWindow }
        >
          <DocsList items={ agreementOwnerData } />
        </DocumentsLayout>

      </article>
    </Layout>
  )
}

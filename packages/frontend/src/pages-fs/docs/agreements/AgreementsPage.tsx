import { DocumentsLayout, Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { useWindowDimensions } from '@shared/lib'
import { dataMenu, HeadMenu, SideMenu } from '@widgets/documents-side-menu'
import { AgreementsList } from '@widgets/documents-agreements'

const categorySideMenu = 'Образцы документов'

export const AgreementsPage = (): JSX.Element => {
  const { widthWindow } = useWindowDimensions()
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <DocumentsLayout
        headMenu={ <HeadMenu data={ dataMenu } /> }
        sideMenu={ <SideMenu activeItem={ categorySideMenu }
          data={ dataMenu }
        /> }
        widthProps={ 1060 }
        widthWindowProps={ widthWindow }
      >
        <AgreementsList />
      </DocumentsLayout>
    </Layout>
  )
}

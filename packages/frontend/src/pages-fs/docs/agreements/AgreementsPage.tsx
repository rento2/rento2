import { DocumentsLayout, Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { useWindowDimensions } from '@shared/lib'
import { HeadMenu, SideMenu } from '@widgets/documents-side-menu'
import { AgreementsList } from '@widgets/documents-agreements'

export const AgreementsPage = (): JSX.Element => {
  const { widthWindow } = useWindowDimensions()
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >

      <DocumentsLayout headMenu={ <HeadMenu /> }
        sideMenu={ <SideMenu /> }
        widthProps={ 1059 }
        widthWindowProps={ widthWindow }
      >
        <AgreementsList />
      </DocumentsLayout>
    </Layout>
  )
}

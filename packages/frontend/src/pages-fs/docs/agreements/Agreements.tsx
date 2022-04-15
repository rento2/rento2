import { DocumentsLayout, Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { useWindowDimensions } from '@shared/lib'
import { HeadMenu, SideMenu } from '@widgets/documents-side-menu'
import { AgreementsList } from '@shared/ui/agreements-list'
import { useRouter } from 'next/dist/client/router'

export const Agreements = (): JSX.Element => {
  const { widthWindow } = useWindowDimensions()
  const path = useRouter().asPath
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >

      <DocumentsLayout headMenu={ <HeadMenu /> }
        pagePath={ path }
        sideMenu={ <SideMenu /> }
        titleText=""
        widthProps={ 1059 }
        widthWindowProps={ widthWindow }
      >
        <AgreementsList />
      </DocumentsLayout>
    </Layout>
  )
}

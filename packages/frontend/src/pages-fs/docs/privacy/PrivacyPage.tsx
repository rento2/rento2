import { DocumentsLayout, Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { HeadMenu, SideMenu } from '@widgets/documents-side-menu'
import { useWindowDimensions } from '@shared/lib'
import { DocsList } from '@widgets/docs-list'
import { privacyData } from './model/privacyData'

export const PrivacyPage = (): JSX.Element => {
  const { widthWindow } = useWindowDimensions()
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <DocumentsLayout headMenu={ <HeadMenu /> }
        sideMenu={ <SideMenu /> }
        titleText="igiu"
        widthProps={ 1059 }
        widthWindowProps={ widthWindow }
      >
        <DocsList items={ privacyData } />
      </DocumentsLayout>
    </Layout>
  )
}

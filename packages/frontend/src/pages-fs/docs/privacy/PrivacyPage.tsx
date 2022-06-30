import { DocsTitle, DocumentsLayout, Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { dataMenu, HeadMenu, SideMenu } from '@widgets/documents-side-menu'
import { useWindowDimensions } from '@shared/lib'
import { DocsList } from '@widgets/docs-list'
import { privacyData } from './model/privacyData'

const containTitle = 'Политика обработки персональных данных'
const categorySideMenu = 'Политика обработки персональных данных'

export const PrivacyPage = (): JSX.Element => {
  const { widthWindow } = useWindowDimensions()
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <DocumentsLayout docTitle={ <DocsTitle containTitle={ containTitle } /> }
        headMenu={ <HeadMenu data={ dataMenu } /> }
        sideMenu={ <SideMenu activeItem={ categorySideMenu }
          data={ dataMenu }
        /> }
        widthProps={ 1060 }
        widthWindowProps={ widthWindow }
      >
        <DocsList items={ privacyData } />
      </DocumentsLayout>
    </Layout>
  )
}

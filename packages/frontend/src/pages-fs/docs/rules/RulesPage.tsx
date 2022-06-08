import { Layout, DocumentsLayout, DocsTitle } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { useWindowDimensions } from '@shared/lib'
import { DocsList } from '@widgets/docs-list'
import { dataMenu, HeadMenu, SideMenu } from '@widgets/documents-side-menu'
import { rulesData } from './model/rulesData'

const containTitle = 'Пользовательское соглашение'
const categorySideMenu = 'Пользовательское соглашение'

export const RulesPage = (): JSX.Element => {
  const { widthWindow } = useWindowDimensions()
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <article>
        <DocumentsLayout docTitle={ <DocsTitle containTitle={ containTitle } /> }
          headMenu={ <HeadMenu data={ dataMenu } /> }
          sideMenu={ <SideMenu activeItem={ categorySideMenu }
            data={ dataMenu }
          /> }
          widthProps={ 1060 }
          widthWindowProps={ widthWindow }
        >
          <DocsList items={ rulesData } />
        </DocumentsLayout>

      </article>
    </Layout>
  )
}

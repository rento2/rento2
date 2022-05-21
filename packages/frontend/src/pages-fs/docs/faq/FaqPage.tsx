import { DocumentsLayout } from '@widgets/documents-layout'
import { Layout, AccordionList } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { dateAccordion } from './model/dateAccordion'
import { useWindowDimensions } from '@shared/lib'
import { SideMenu, HeadMenu, dataMenu } from '@widgets/documents-side-menu'
import { DocsTitle } from '@widgets/docs-title'

const containTitle = 'Частые вопросы'
const categorySideMenu = 'Частые вопросы'

export const FaqPage = (): JSX.Element => {
  const { widthWindow } = useWindowDimensions()

  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >

      <DocumentsLayout
        docTitle={ <DocsTitle containTitle={ containTitle }
          pathIcon='/images/docs/pic-question.svg'
        /> }
        headMenu={ <HeadMenu data={ dataMenu } /> }

        sideMenu={ <SideMenu activeItem={ categorySideMenu }
          data={ dataMenu }
        /> }
        widthProps={ 1060 }
        widthWindowProps={ widthWindow }
      >
        <AccordionList state={ dateAccordion } />
      </DocumentsLayout>
    </Layout>
  )
}

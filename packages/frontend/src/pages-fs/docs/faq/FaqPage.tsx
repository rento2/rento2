import { DocumentsLayout, AccordionList, Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { dateAccordion } from './model/dateAccordion'
import { useWindowDimensions } from '@shared/lib'
import { SideMenu, HeadMenu } from '@widgets/documents-side-menu'

export const FaqPage = (): JSX.Element => {
  const { widthWindow } = useWindowDimensions()
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >

      <DocumentsLayout
        headMenu={ <HeadMenu /> }
        sideMenu={ <SideMenu /> }
        titleText="Частые вопросы"
        widthProps={ 1060 }
        widthWindowProps={ widthWindow }
      >
        <AccordionList state={ dateAccordion } />
      </DocumentsLayout>
    </Layout>
  )
}

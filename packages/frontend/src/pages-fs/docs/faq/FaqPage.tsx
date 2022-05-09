import { DocumentsLayout, AccordionList, Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { dateAccordion } from './model/dateAccordion'
import { useWindowDimensions } from '@shared/lib'
import { SideMenu, HeadMenu, dataMenu } from '@widgets/documents-side-menu'

const titleText = 'Частые вопросы'

export const FaqPage = (): JSX.Element => {
  const { widthWindow } = useWindowDimensions()

  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >

      <DocumentsLayout
        headMenu={ <HeadMenu data={ dataMenu } /> }
        pathIcon='/images/docs/pic-question.svg'
        sideMenu={ <SideMenu activeItem={ titleText }
          data={ dataMenu }
        /> }
        titleText={ titleText }
        widthProps={ 1060 }
        widthWindowProps={ widthWindow }
      >
        <AccordionList state={ dateAccordion } />
      </DocumentsLayout>
    </Layout>
  )
}

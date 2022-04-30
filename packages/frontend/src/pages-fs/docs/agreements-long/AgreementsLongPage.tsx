import { AccordionList, DocumentsLayout, Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { useWindowDimensions } from '@shared/lib'
import { HeadMenu, SideMenu } from '@widgets/documents-side-menu'
import { dateAccordion } from '../faq/model/dateAccordion'

const titleText = 'Договор аренды жилого помещения'

export const AgreementsLongPage = (): JSX.Element => {
  const { widthWindow } = useWindowDimensions()
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >

      <DocumentsLayout headMenu={ <HeadMenu /> }
        sideMenu={ <SideMenu activeItem={ titleText } /> }
        titleIcon='/images/docs/agreements-treaty.svg'
        titleText={ titleText }
        update='обновление от 06.12.2021'
        widthProps={ 1060 }
        widthWindowProps={ widthWindow }
      >
        <AccordionList state={ dateAccordion } />
      </DocumentsLayout>
    </Layout>
  )
}

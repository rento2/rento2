import { Layout, DocumentsLayout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { useWindowDimensions } from '@shared/lib'
import { DocsList } from '@widgets/docs-list'
import { HeadMenu, SideMenu } from '@widgets/documents-side-menu'
import { agreementLongData } from './model/agreementLongData'

export const AgreementLongPage = (): JSX.Element => {
  const { widthWindow } = useWindowDimensions()
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <article>
        <DocumentsLayout headMenu={ <HeadMenu /> }
          sideMenu={ <SideMenu /> }
          titleText="Частые вопросы"
          widthProps={ 1059 }
          widthWindowProps={ widthWindow }
        >
          <DocsList items={ agreementLongData } />
        </DocumentsLayout>

      </article>
    </Layout>
  )
}

import { DocumentsLayout, Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { HeadMenu, SideMenu } from '@widgets/documents-side-menu'
import { useWindowDimensions } from '@shared/lib'

export const PrivacyPage = (): JSX.Element => {
  const { widthWindow } = useWindowDimensions()
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <main>
        <section className='container-old'>
          <DocumentsLayout headMenu={ <HeadMenu /> }
            sideMenu={ <SideMenu /> }
            titleText="igiu"
            widthProps={ 1059 }
            widthWindowProps={ widthWindow }
          >
            <div>
              guyhu
            </div>
          </DocumentsLayout>
        </section>
      </main>
    </Layout>
  )
}

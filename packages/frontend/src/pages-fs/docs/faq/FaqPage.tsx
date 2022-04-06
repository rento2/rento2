import { Layout } from 'shared/ui'
import { Header } from 'widgets/header'
import { Footer } from 'widgets/footer'
import DocumentsLoyout from 'shared/ui/documentsLoyout/DocumetsLoyout'

export const FaqPage = (): JSX.Element => {
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <main>
        <section className='container'>
          <DocumentsLoyout />
        </section>
      </main>
    </Layout>
  )
}

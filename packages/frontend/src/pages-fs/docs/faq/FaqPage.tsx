import { Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'

export const FaqPage = (): JSX.Element => {
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <main>
        <section className='container'>
          <h1>
            Частые вопросы
          </h1>
        </section>
      </main>
    </Layout>
  )
}

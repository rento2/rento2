import { Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'

export const PrivacyPage = (): JSX.Element => {
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <main>
        <section className='container'>
          <h1>
            Политика обработки персональных данных
          </h1>
        </section>
      </main>
    </Layout>
  )
}

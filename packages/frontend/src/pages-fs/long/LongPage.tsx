import { Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'

const titlePage = 'Снять хорошую квартиру от 6 месяцев &#128156;'

export const LongPage = (): JSX.Element => {
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
      titlePage={ titlePage }
    >
      <main>
        <section className='container'>
          <h1>
            Долгосрочная аренда
          </h1>
        </section>
      </main>
    </Layout>
  )
}

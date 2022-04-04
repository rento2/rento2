import { Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'

const titlePage = 'Сдать квартиру быстро, безопасно и легко &#128156;'

export const OwnersPage = (): JSX.Element => {
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
      titlePage={ titlePage }
    >
      <main>
        <section className='container'>
          <h1>
            Собственники
          </h1>
        </section>
      </main>
    </Layout>
  )
}

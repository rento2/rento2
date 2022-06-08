import { Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { Filter } from '@features/filter'

const titlePage = 'Аренда квартир на любой срок. Обслужим, проконтролируем, решим бытовые вопросы'

export const HomePage = (): JSX.Element => {
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
      titlePage={ titlePage }
    >
      <main>
        <section className='container'>
          <h1>
            Главная
          </h1>
        </section>
        <Filter />
        <section className='container'
          style={ { height: '1500px' } }
        />
      </main>
    </Layout>
  )
}

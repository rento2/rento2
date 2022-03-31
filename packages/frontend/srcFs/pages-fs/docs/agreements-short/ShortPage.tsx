import { Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { AgreementShortList } from './ui/AgreementShortList'

export const ShortPage = (): JSX.Element => {
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <main className='container'>
        <section>
          <h1>
            Договор оферта краткосрочной аренды квартиры
          </h1>
        </section>
        <AgreementShortList />
      </main>
    </Layout>
  )
}

import { Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
// import { AgreementShortList } from '@modules/docs/AgreementShort/AgreementShortList'

const titlePage = 'Снять квартиру посуточно в центре Москвы &#128156;'

export const ShortPage = (): JSX.Element => {
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
      titlePage={ titlePage }
    >
      <main>
        <section className='container'>
          <h1>
            Краткосрочная аренда
          </h1>
          {/* <AgreementShortList /> */}
        </section>
      </main>
    </Layout>
  )
}

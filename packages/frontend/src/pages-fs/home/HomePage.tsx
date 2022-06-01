import { Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import Link from 'next/link'

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
          <Link href='/docs/agreements/short'>
            <a>
              Договор оферта краткосрочной аренды квартиры
            </a>
          </Link>
          <Link href='/docs/agreements/long'>
            <a>
              Договор долгосрочной аренды жилого помещения
            </a>
          </Link>
          <Link href='/docs/agreements/service'>
            <a>
              Договор обслуживания арендуемой квартиры
            </a>
          </Link>
          <Link href='/docs/agreements/selection'>
            <a>
              Договор на подбор помещения в аренду
            </a>
          </Link>
          <Link href='/docs/rules'>
            <a>
              Пользовательское соглашение
            </a>
          </Link>
          <Link href='/docs/agreements/owner-rento'>
            <a>
              Договор между собственником и Rento
            </a>
          </Link>
        </section>
      </main>
    </Layout>
  )
}

import { Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { ApartmentCard } from '@widgets/apartment-card'
import { IApartmentCard } from '@shared/types'

const titlePage = 'Снять хорошую квартиру от 6 месяцев &#128156;'

export const LongPage = ({ data }: { data: IApartmentCard[]}): JSX.Element => {
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
          <style jsx>
            {`
          .long-page {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;
          }
      `}

          </style>
          <ul className='long-page'>
            {data?.map((el: IApartmentCard) => (
              <li key={ el.id }>
                <ApartmentCard { ...el } />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  )
}

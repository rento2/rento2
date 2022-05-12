import { Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { LongInfo } from '@widgets/long-info'

const titlePage = 'Снять хорошую квартиру от 6 месяцев &#128156;'

const testAdress = {
  street: '2й Спассоналивковский пер. 16/2',
  metro: [
    {
      name: 'Бульвар Адмирала Ушакова',
      time: '9 минут',
      iconClass: 'icon-light-green'
    },
    {
      name: 'Бульвар Ещё кого-то',
      time: '15 минут',
      iconClass: 'icon-blue'
    }
  ]
}

const testDetails = {
  communal: 'только счётчики',
  deposit: '55000₽',
  commission: '15000₽'
}

const testParameters = {
  rooms: '2',
  area: '248 м2',
  floor: '25/30'
}

const testPrice = '55000'

export const LongOnePage = (): JSX.Element => {
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
      titlePage={ titlePage }
    >
      <main>
        <section className='container'>
          <LongInfo adress={ testAdress }
            details={ testDetails }
            parameters={ testParameters }
            price={ testPrice }
          />
        </section>
      </main>
    </Layout>
  )
}

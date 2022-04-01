import LongInfo from '@modules/LongInfo/LongInfo'
import Head from 'next/head'
import Layout, { longTitle } from '../src/components/layouts/Layout'

export default function long (): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>
          {longTitle}
        </title>
      </Head>
      <section className="container">
        <h2>
          Долгосрочная аренда
        </h2>
        <LongInfo
        // просто заглушки
          adress={ {
            street: '2й Спассоналивковский пер. 16/2',
            metro: [
              {
                name: 'Бульвар Адмирала Ушакова',
                time: '9 минут',
                lineColor: '#C5E265'
              },
              {
                name: 'Бульвар Ещё кого-то',
                time: '15 минут',
                lineColor: '#1770A7'
              }
            ]
          } }
          details={ {
            communal: 'только счётчики',
            deposit: '55000₽',
            commission: '15000₽'
          } }
          parameters={ {
            rooms: '2',
            area: '248 м2',
            floor: '25/30'
          } }
          price="55000"
        />
      </section>
    </Layout>
  )
}

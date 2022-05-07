import classNames from 'classnames'
import { Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { ApartmentCard } from '@widgets/apartment-card'
import { IApartmentCard } from '@shared/types'
import { ApartmentsPromo } from '@features/apartments-promo/ApartmentsPromo'
import styles from './LongPage.module.scss'

const titlePage = 'Снять хорошую квартиру от 6 месяцев &#128156;'

export const LongPage = ({ data }: { data: IApartmentCard[]}): JSX.Element => {
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
      titlePage={ titlePage }
    >
      <main>
        <section>
          <h1 className='visually-hidden'>
            Долгосрочная аренда
          </h1>
          <ul className={ classNames(styles['long-page'], 'container') }>
            {data?.slice(0, 10).map((el: IApartmentCard) => (
              <li key={ el.id }>
                <ApartmentCard { ...el } />
              </li>
            ))}
          </ul>
          <ApartmentsPromo cards={ data?.slice(0, 10) } />
          <ul className={ classNames(styles['long-page'], 'container') }>
            {data?.slice(-10).map((el: IApartmentCard) => (
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

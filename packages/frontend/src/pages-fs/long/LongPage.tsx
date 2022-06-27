import classNames from 'classnames'

import { Layout } from '@shared/ui'
import { IApartmentsDataList, IApartmentItem } from '@shared/api'
import { pathPages } from '@shared/config'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { ApartmentCard } from '@widgets/apartment-card'
import { ApartmentsPromo } from '@widgets/apartments-promo/ApartmentsPromo'
import styles from './LongPage.module.scss'

const titlePage = 'Снять хорошую квартиру от 6 месяцев &#128156;'

export const LongPage = ({ data }: { data: IApartmentsDataList}): JSX.Element => {
  console.log(data)
  const { items } = data
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
            {items?.slice(0, 10).map((el: IApartmentItem) => (
              <li key={ el['id'] }>
                <ApartmentCard { ...el }
                  pathPage={ pathPages.long }
                />
              </li>
            ))}
          </ul>
          <ApartmentsPromo cards={ items?.slice(0, 10) }
            pathPage={ pathPages.long }
          />
          <ul className={ classNames(styles['long-page'], 'container') }>
            {items?.slice(-10).map((el: IApartmentItem) => (
              <li key={ el['id'] }>
                <ApartmentCard { ...el }
                  pathPage={ pathPages.long }
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  )
}

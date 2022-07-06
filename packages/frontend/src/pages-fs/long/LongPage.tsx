import classNames from 'classnames'

import { Layout, PriceLong, DetailsLong } from '@shared/ui'
import { IApartmentsDataList, IApartmentItem } from '@shared/api'
import { pathPages } from '@shared/config'
import { numbersUtils } from '@shared/lib'

import { ApartmentCard } from '@entities/cards/ApartmentCard'
import { CollectionsCard } from '@entities/cards/CollectionsCard'
import { MetroInfo } from '@entities/MetroInfo'
import { SwiperWithButton } from '@entities/carousels/SwiperWithButton'

import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { ApartmentsPromo } from '@widgets/apartments-promo'

import { mockPhotos } from './model/mockData'
import styles from './LongPage.module.scss'

const titlePage = 'Снять хорошую квартиру от 6 месяцев &#128156;'

// TODO: Здесь формируется ссылка и передается в компоненты
export const LongPage = ({ data }: { data: IApartmentsDataList}): JSX.Element => {
  const { items } = data

  const ApartmentCardLong = ({ apartmentData }: {apartmentData: IApartmentItem}): JSX.Element => {
    const area = numbersUtils.roundInteger(numbersUtils.convertNumber(apartmentData.area))

    return (
      <ApartmentCard { ...apartmentData }
        isDeposit
        classCard={ classNames(styles['long-page__card']) }
        detailsInfo={ DetailsLong({ roomsNum: apartmentData.roomsNum, area, storey: apartmentData.storey, totalStoreys: apartmentData.totalStoreys }) }
        media={ <SwiperWithButton classBtnHover={ classNames(styles['long-page__btn-hover']) }
          images={ mockPhotos }
        /> }
        metroInfo={ <MetroInfo subwayStation={ apartmentData.subwayStation }
          timeFoot={ apartmentData.timeToSubwayByFoot }
          timeVehicle={ apartmentData.timeToSubwayByVehicle }
        /> }
        pathPage={ pathPages.long }
        priceInfo={ PriceLong(apartmentData.pricePerMonth) }
      />
    )
  }

  const CollectionsCardLong = ({ apartmentData }: {apartmentData: IApartmentItem}): JSX.Element => {
    const area = numbersUtils.roundInteger(numbersUtils.convertNumber(apartmentData.area))

    return (
      <CollectionsCard { ...apartmentData }
        detailsInfo={ DetailsLong({ roomsNum: apartmentData.roomsNum, area, storey: apartmentData.storey, totalStoreys: apartmentData.totalStoreys }) }
        metroInfo={ <MetroInfo classSubway={ classNames(styles['long-page__subway']) }
          classWrapper={ classNames(styles['long-page__metro-wrapper']) }
          subwayStation={ apartmentData.subwayStation }
          timeFoot={ apartmentData.timeToSubwayByFoot }
          timeVehicle={ apartmentData.timeToSubwayByVehicle }
        /> }
        pathPage={ pathPages.long }
        priceInfo={ PriceLong(apartmentData.pricePerMonth) }
      />
    )
  }

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
              <li key={ el.id }>
                <ApartmentCardLong apartmentData={ el } />
              </li>
            ))}
          </ul>

          <ApartmentsPromo cards={ items?.slice(0, 10) }
            pathPage={ pathPages.long }
            titleCollection="inCityCenter"
          >
            {apartment => (
              <CollectionsCardLong apartmentData={ apartment } />
            )}
          </ApartmentsPromo>

          <ul className={ classNames(styles['long-page'], 'container') }>
            {items?.slice(-10).map((el: IApartmentItem) => (
              <li key={ el.id }>
                <ApartmentCardLong apartmentData={ el } />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  )
}

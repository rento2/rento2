import classNames from 'classnames'

import { Layout, PriceShort, DetailsShort } from '@shared/ui'
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
import styles from './ShortPage.module.scss'

const titlePage = 'Снять хорошую квартиру от 6 месяцев &#128156;'

// TODO: Здесь формируется ссылка и передается в компоненты
// TODO: Изменить название стилей с long на short
export const ShortPage = ({ data }: { data: IApartmentsDataList}): JSX.Element => {
  const { items } = data

  const ApartmentCardShort = ({ apartmentData }: {apartmentData: IApartmentItem}): JSX.Element => {
    const area = numbersUtils.roundInteger(numbersUtils.convertNumber(apartmentData.area))

    return (
      <ApartmentCard { ...apartmentData }
        classCard={ classNames(styles['long-page__card']) }
        detailsInfo={ DetailsShort({ roomsNum: apartmentData.roomsNum, area, storey: apartmentData.storey }) }
        media={ <SwiperWithButton classBtnHover={ classNames(styles['long-page__btn-hover']) }
          images={ mockPhotos }
        /> }
        metroInfo={ <MetroInfo subwayStation={ apartmentData.subwayStation }
          timeFoot={ apartmentData.timeToSubwayByFoot }
          timeVehicle={ apartmentData.timeToSubwayByVehicle }
        /> }
        pathPage={ pathPages.short }
        priceInfo={ PriceShort(apartmentData.price) }
      />
    )
  }

  const CollectionsCardLong = ({ apartmentData }: {apartmentData: IApartmentItem}): JSX.Element => {
    const area = numbersUtils.roundInteger(numbersUtils.convertNumber(apartmentData.area))

    return (
      <CollectionsCard { ...apartmentData }
        detailsInfo={ DetailsShort({ roomsNum: apartmentData.roomsNum, area, storey: apartmentData.storey }) }
        metroInfo={ <MetroInfo classSubway={ classNames(styles['long-page__subway']) }
          classWrapper={ classNames(styles['long-page__metro-wrapper']) }
          subwayStation={ apartmentData.subwayStation }
          timeFoot={ apartmentData.timeToSubwayByFoot }
          timeVehicle={ apartmentData.timeToSubwayByVehicle }
        /> }
        pathPage={ pathPages.short }
        priceInfo={ PriceShort(apartmentData.price) }
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
            Краткосрочная аренда
          </h1>

          <ul className={ classNames(styles['long-page'], 'container') }>
            {items?.slice(0, 10).map((el) => (
              <li key={ el['id'] }>
                <ApartmentCardShort apartmentData={ el } />
              </li>
            ))}
          </ul>

          <ApartmentsPromo cards={ items?.slice(0, 10) }
            pathPage={ pathPages.short }
            titleCollection="inCityCenter"
          >
            {apartment => (
              <CollectionsCardLong apartmentData={ apartment } />
            )}
          </ApartmentsPromo>

          <ul className={ classNames(styles['long-page'], 'container') }>
            {items?.slice(-10).map((el) => (
              <li key={ el['id'] }>
                <ApartmentCardShort apartmentData={ el } />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  )
}

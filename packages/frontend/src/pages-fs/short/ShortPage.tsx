import classNames from 'classnames'
import Image from 'next/image'

import { Layout, PriceShort, DetailsShort } from '@shared/ui'
import { IApartmentsDataList, IApartmentItem } from '@shared/api'
import { pathPages } from '@shared/config'
import { numbersUtils } from '@shared/lib'

import { ApartmentCard } from '@entities/cards/ApartmentCard'
import { MetroInfo } from '@entities/MetroInfo'
import { SwiperWithButton } from '@entities/carousels/SwiperWithButton'

import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { CollectionApartments } from '@widgets/collection-apartments'

import { mockPhotos } from './model/mockData'
import styles from './ShortPage.module.scss'

const titlePage = 'Снять хорошую квартиру от 6 месяцев &#128156;'

export const ShortPage = ({ data }: { data: IApartmentsDataList}): JSX.Element => {
  const { items } = data

  const getPath = (id: string): string => {
    return `/${pathPages.short}/${id}`
  }

  const ApartmentCardShort = ({ apartmentData }: {apartmentData: IApartmentItem}): JSX.Element => {
    const area = numbersUtils.roundInteger(numbersUtils.convertNumber(apartmentData.area))

    return (
      <ApartmentCard { ...apartmentData }
        classCard={ classNames(styles.card) }
        detailsInfo={ DetailsShort({ roomsNum: apartmentData.roomsNum, area, storey: apartmentData.storey }) }
        media={ <SwiperWithButton classBtnHover={ classNames(styles['card__btn-hover']) }
          images={ mockPhotos }
        /> }
        metroInfo={ <MetroInfo subwayStation={ apartmentData.subwayStation }
          timeFoot={ apartmentData.timeToSubwayByFoot }
          timeVehicle={ apartmentData.timeToSubwayByVehicle }
        /> }
        pathPage={ getPath(apartmentData.id) }
        priceInfo={ PriceShort(apartmentData.price) }
      />
    )
  }

  // TODO: Изменить путь к картинке и alt, когда появится функционал на бэке
  const CollectionCardShort = ({ apartmentData }: {apartmentData: IApartmentItem}): JSX.Element => {
    const area = numbersUtils.roundInteger(numbersUtils.convertNumber(apartmentData.area))

    return (
      <ApartmentCard { ...apartmentData }
        detailsInfo={ DetailsShort({ roomsNum: apartmentData.roomsNum, area, storey: apartmentData.storey }) }
        media={
          <div className={ styles.card__image }>
            <Image alt='room1'
              layout='fill'
              objectFit='cover'
              src='/images/long/room1.jpg'
            />
          </div> }
        metroInfo={ <MetroInfo classSubway={ classNames(styles.card__subway) }
          classWrapper={ classNames(styles['card__metro-wrapper']) }
          subwayStation={ apartmentData.subwayStation }
          timeFoot={ apartmentData.timeToSubwayByFoot }
          timeVehicle={ apartmentData.timeToSubwayByVehicle }
        /> }
        pathPage={ getPath(apartmentData.id) }
        priceInfo={ PriceShort(apartmentData.price) }
        typeCard="collection"
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

          <ul className={ classNames(styles['card-list'], 'container') }>
            {items?.slice(0, 10).map((el) => (
              <li key={ el['id'] }>
                <ApartmentCardShort apartmentData={ el } />
              </li>
            ))}
          </ul>

          <CollectionApartments cards={ items?.slice(0, 10) }
            titleCollection="inCityCenter"
          >
            {apartment => (
              <CollectionCardShort apartmentData={ apartment } />
            )}
          </CollectionApartments>

          <ul className={ classNames(styles['card-list'], 'container') }>
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

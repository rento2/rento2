import { Admin, ListGuesser, Resource } from 'react-admin'
import restProvider from './common/dataProvider'
import PostIcon from '@material-ui/icons/Book'
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel'
import BedIcon from '@material-ui/icons/KingBed'
import RateReview from '@material-ui/icons/RateReview'
import SubwayIcon from '@material-ui/icons/Subway'

import { ApartmentList, ApartmentCreate, ApartmentEdit } from './components/Apartment'
import { authProvider } from 'common'
import LoginPage from 'components/LoginPage/LoginPage'
import { httpClient } from 'common/httpClient'
import { BannerCreate, BannerEdit, BannerList } from 'components/Banner'
import { SleepingPlacesCreate, SleepingPlacesEdit, SleepingPlacesList } from 'components/SleepingPlaces'
import { ReviewEdit, ReviewList } from 'components/Review'
import { MetroLineCreate, MetroLineEdit, MetroLineList } from 'components/MetroLine'
import { MetroStationCreate, MetroStationEdit, MetroStationList } from 'components/MetroStation'

const dataProvider = restProvider(String(process.env['REACT_APP_SERVER_URL']), httpClient)

const App = (): JSX.Element => (
  <Admin authProvider={ authProvider }
    dataProvider={ dataProvider }
    loginPage={ LoginPage }
  >
    <Resource
      create={ApartmentCreate}
      edit={ApartmentEdit}
      icon={PostIcon}
      list={ApartmentList}
      name='apartments'
    />

    <Resource
      create={BannerCreate}
      edit={BannerEdit}
      icon={ViewCarouselIcon}
      list={BannerList}
      name='banners'
    />

    <Resource
      create={MetroLineCreate}
      edit={MetroLineEdit}
      icon={SubwayIcon}
      list={MetroLineList}
      name='metro-lines'
    />

    <Resource
      create={MetroStationCreate}
      edit={MetroStationEdit}
      icon={SubwayIcon}
      list={MetroStationList}
      name='metro-stations'
    />

    <Resource
      edit={ReviewEdit}
      icon={RateReview}
      list={ReviewList}
      name='reviews'
    />

    <Resource
      list={ListGuesser}
      name='accommodations'
    />

    <Resource
      create={SleepingPlacesCreate}
      edit={SleepingPlacesEdit}
      icon={BedIcon}
      list={SleepingPlacesList}
      name='sleeping-places'
    />

    <Resource
      name='photos'
    />
  </Admin>
)

export default App

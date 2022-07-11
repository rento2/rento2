import { Admin, Resource } from 'react-admin'
import restProvider from './common/dataProvider'
import PostIcon from '@material-ui/icons/Book'
import BannerIcon from '@material-ui/icons/AirplanemodeActive'
import { ApartmentList, ApartmentCreate, ApartmentEdit } from './components/Apartment'
import { authProvider } from 'common'
import LoginPage from 'components/LoginPage/LoginPage'
import { httpClient } from 'common/httpClient'
import { BannerCreate, BannerEdit, BannerList } from 'components/Banner'

const dataProvider = restProvider(String(process.env['REACT_APP_SERVER_URL']), httpClient)

const App = (): JSX.Element => (
  <Admin authProvider={ authProvider }
    dataProvider={ dataProvider }
    loginPage={ LoginPage }
  >
    <Resource
      create={ ApartmentCreate }
      edit={ ApartmentEdit }
      icon={ PostIcon }
      list={ ApartmentList }
      name='apartments'
    />

    <Resource
      create={ BannerCreate }
      edit={ BannerEdit }
      icon={ BannerIcon }
      list={ BannerList }
      name='banners'
    />
  </Admin>
)

export default App

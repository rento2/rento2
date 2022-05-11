import { Admin, Resource } from 'react-admin'
import restProvider from './common/dataProvider'
import PostIcon from '@material-ui/icons/Book'
import { ApartmentList, ApartmentCreate, ApartmentEdit } from './components/Apartment'
import { Dashboard } from 'components'
import { authProvider } from 'common'
import LoginPage from 'components/LoginPage/LoginPage'
import { httpClient } from 'common/httpClient'

const dataProvider = restProvider(String(process.env['REACT_APP_SERVER_URL']), httpClient)

const App = (): JSX.Element => (
  <Admin authProvider={ authProvider }
    dashboard={ Dashboard }
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
  </Admin>
)

export default App

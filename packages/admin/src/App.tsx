import { Admin, Resource } from 'react-admin'
import restProvider from './dataProvider/index'
import PostIcon from '@material-ui/icons/Book'
import { ApartmentList, ApartmentCreate, ApartmentEdit } from 'components/Apartment'
import { AccommodationList, AccommodationCreate, AccommodationEdit } from 'components/Accommodation'

import { Dashboard } from 'components'
import { authProvider } from 'common'

const dataProvider = restProvider(String(process.env['REACT_APP_SERVER_URL']))

const App = (): JSX.Element => {
  return (
    <Admin authProvider={ authProvider }
      dashboard={ Dashboard }
      dataProvider={ dataProvider }
    >
      <Resource
        create={ ApartmentCreate }
        edit={ ApartmentEdit }
        icon={ PostIcon }
        list={ ApartmentList }
        name='apartments'
      />
      <Resource
        create={ AccommodationCreate }
        edit={ AccommodationEdit }
        icon={ PostIcon }
        list={ AccommodationList }
        name='accommodations'
      />
    </Admin>
  )
}

export default App

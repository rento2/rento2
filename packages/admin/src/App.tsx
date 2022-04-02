import { Admin, Resource } from 'react-admin'
import restProvider from './dataProvider/index'
import PostIcon from '@material-ui/icons/Book'
import Apartments from 'components/Apartments'

import { Dashboard } from 'components'
import { authProvider } from 'common'

const dataProvider = restProvider('http://localhost:3333')

const App = (): JSX.Element => {
  return (
    <Admin authProvider={ authProvider }
      dashboard={ Dashboard }
      dataProvider={ dataProvider }
    >
      <Resource
        icon={ PostIcon }
        list={ Apartments }
        name='apartments'
      />
    </Admin>
  )
}

export default App

import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'

import { PostList, PostEdit, PostCreate, UserList, Dashboard } from 'components'
import { authProvider } from 'common'
import LoginPage from 'components/LoginPage/LoginPage'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = (): JSX.Element => (
  <Admin authProvider={ authProvider }
    dashboard={ Dashboard }
    dataProvider={ dataProvider }
    loginPage={ LoginPage }
  >
    <Resource create={ PostCreate }
      edit={ PostEdit }
      icon={ PostIcon }
      list={ PostList }
      name='posts'
    />
    <Resource icon={ UserIcon }
      list={ UserList }
      name='users'
    />
  </Admin>
)

export default App

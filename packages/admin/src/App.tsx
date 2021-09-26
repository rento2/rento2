import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'

import { PostList, PostEdit, PostCreate, UserList, Dashboard } from 'components'
import { authProvider } from 'common'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = (): JSX.Element => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name='users' list={UserList} icon={UserIcon} />
  </Admin>
)

export default App

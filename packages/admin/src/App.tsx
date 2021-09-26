import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

import PostList from 'components/PostList'
import UserList from 'components/UserList'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = (): JSX.Element => (
  <Admin dataProvider={dataProvider}>
    <Resource name='posts' list={PostList} />
    <Resource name='users' list={UserList} />
  </Admin>
)

export default App

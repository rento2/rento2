import { Admin } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = (): JSX.Element => <Admin dataProvider={dataProvider} />

export default App

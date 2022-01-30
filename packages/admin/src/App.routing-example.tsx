import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(async () => await import('./routes/Home/Home'))
const Logo = lazy(async () => await import('./routes/Logo/Logo'))

const App = (): JSX.Element => (
  <Router>
    <Suspense fallback={
      <div>
        Loading...
      </div> }
    >
      <Switch>
        <Route exact
          path='/'
          render={ (props) => (<Home { ...props }
            name='john'
          />) }
        />
        <Route component={ Logo }
          path='/logo'
        />
      </Switch>
    </Suspense>
  </Router>
)

export default App

import logo from './logo.svg'
// import { ReactComponent as Logo } from './logo.svg'
import './App.module.scss'

function App (): JSX.Element {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <Logo className='App-logo' title='logo' /> */}
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

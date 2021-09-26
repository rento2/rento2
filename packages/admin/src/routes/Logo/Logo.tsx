import logo from './logo.svg'
// import { ReactComponent as Logo } from './logo.svg'
import './Logo.module.scss'

function Logo (): JSX.Element {
  return (
    <div className='Logo'>
      <header className='Logo-header'>
        {/* <Logo className='Logo-logo' title='logo' /> */}
        <img src={logo} className='Logo-logo' alt='logo' />
        <p>
          Edit <code>src/Logo.tsx</code> and save to reload.
        </p>
        <a
          className='Logo-link'
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

export default Logo

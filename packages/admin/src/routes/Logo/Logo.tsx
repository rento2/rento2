import logo from './logo.svg'
// import { ReactComponent as Logo } from './logo.svg'
import './Logo.module.scss'

function Logo (): JSX.Element {
  return (
    <div className='Logo'>
      <header className='Logo-header'>
        {/* <Logo className='Logo-logo' title='logo' /> */}
        <img alt='logo'
          className='Logo-logo'
          src={ logo }
        />
        <p>
          Edit
          {' '}
          <code>
            src/Logo.tsx
          </code>
          {' '}
          and save to reload.
        </p>
        <a
          className='Logo-link'
          href='https://reactjs.org'
          rel='noopener noreferrer'
          target='_blank'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Logo

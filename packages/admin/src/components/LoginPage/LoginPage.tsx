import { useState } from 'react'
import { email, required, SimpleForm, TextInput, useLogin, useNotify } from 'react-admin'
import './LoginPage.styles.css'

const validatePassword = [required()]
const validateEmail = [email(), required()]

const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = useLogin()
  const notify = useNotify()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    login({ email, password }).catch(() =>
      notify('Invalid email or password')
    )
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  return (
    <div className='raLogin-main'>
      <div className='raLogin-card'>
        <SimpleForm
          className='raLoginForm-form'
          toolbar={
            <button
              className='raLoginForm-button'
              disabled={ password === '' || email === '' }
            >
              Login
            </button>
          }
          onSubmit={ handleSubmit }
        >
          <TextInput
            source='email'
            type='email'
            validate={ validateEmail }
            onChange={ handleEmailChange }
          />
          <TextInput
            source='password'
            type='password'
            validate={ validatePassword }
            onChange={ handlePasswordChange }
          />
        </SimpleForm>
      </div>
    </div>
  )
}

export default LoginPage

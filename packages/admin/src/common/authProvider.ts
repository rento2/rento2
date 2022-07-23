import axios from 'axios'
import { getItem, setItem } from 'helpers/persistanceStorage'

const authProvider = {
  login: async ({ email, password }: { email: string, password: string }) => {
    try {
      const { data } = await axios.post(
        `${String(process.env['REACT_APP_SERVER_URL'])}/auth/login`, {
          email,
          password
        }
      )

      setItem('auth', {
        accessToken: data.data.token,
        refreshToken: data.data.refreshToken,
        expiresAt: data.data.expires_at
      })

      return await Promise.resolve()
    } catch (err) {
      return await Promise.reject(new Error('Something went wrong: ' + String(err)))
    }
  },
  logout: async () => {
    try {
      await axios.post(`${String(process.env['REACT_APP_SERVER_URL'])}/auth/logout`)

      localStorage.removeItem('auth')

      return await Promise.resolve()
    } catch (err) {
      return await Promise.reject(new Error('Something went wrong: ' + String(err)))
    }
  },
  checkError: async ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth')

      return await Promise.reject(new Error('Login required'))
    }

    return await Promise.resolve()
  },
  checkAuth: async () => {
    const auth = JSON.parse(String(getItem('auth')))

    if (auth === null) {
      return Promise.reject(new Error('Login required'))
    }

    try {
      if (Date.now() >= new Date(auth.expiresAt).getTime()) {
        const { data } = await axios.post(`${String(process.env['REACT_APP_SERVER_URL'])}/auth/refresh`, {
          refreshToken: auth.refreshToken
        })

        setItem('auth', {
          accessToken: data.data.token,
          refreshToken: data.data.refreshToken,
          expiresAt: data.data.expires_at
        })
      }

      return await Promise.resolve()
    } catch (err) {
      return await Promise.reject(new Error('Something went wrong: ' + String(err)))
    }
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: async () => await Promise.resolve()
}

export default authProvider

import axios from 'axios'

const authProvider = {
  login: async ({ email, password }: { email: string, password: string }) => {
    try {
      const { data } = await axios.post(
        `${String(process.env['REACT_APP_SERVER_URL'])}/auth/login`, {
          email,
          password
        }
      )

      localStorage.setItem('auth', JSON.stringify({
        accessToken: data.data.token,
        refreshToken: data.data.refreshToken,
        expiresAt: data.data.expires_at
      }))

      return await Promise.resolve()
    } catch (error) {
      console.log(error)
    }
  },
  logout: async () => {
    try {
      await axios.post(`${String(process.env['REACT_APP_SERVER_URL'])}/auth/logout`)

      localStorage.removeItem('auth')

      return await Promise.resolve()
    } catch (error) {
      console.log(error)
    }
  },
  checkError: async ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth')

      return await Promise.reject(new Error('Api error on auth request'))
    }

    return await Promise.resolve()
  },
  checkAuth: async () => {
    const auth = JSON.parse(String(localStorage.getItem('auth')))

    try {
      if (auth === null) {
        return await Promise.reject(new Error('No auth data found in local storage'))
      }

      if (Date.now() >= new Date(auth.expiresAt).getTime()) {
        const { data } = await axios.post(`${String(process.env['REACT_APP_SERVER_URL'])}/auth/refresh`, {
          refreshToken: auth.refreshToken
        })

        localStorage.setItem('auth', JSON.stringify({
          accessToken: data.data.token,
          refreshToken: data.data.refreshToken,
          expiresAt: data.data.expires_at
        }))
      }

      return await Promise.resolve()
    } catch (error) {
      console.log(error)
    }
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: async () => await Promise.resolve()
}

export default authProvider

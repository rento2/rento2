import axios from 'axios'

const authProvider = {
  login: async ({ email, password }: { email: string, password: string }) => {
    await axios.post(
      `${String(process.env['REACT_APP_SERVER_URL'])}/auth/login`, {
        email,
        password
      }
    )

    return await Promise.resolve()
  },
  // called when the user clicks on the logout button
  logout: async () => {
    await axios.post(`${String(process.env['REACT_APP_SERVER_URL'])}/auth/logout`)

    return await Promise.resolve()
  },
  // called when the API returns an error
  checkError: async ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      return await Promise.reject(new Error('Api error on auth request'))
    }
    return await Promise.resolve()
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: async () => {
    return await Promise.resolve()
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: async () => await Promise.resolve()
}

export default authProvider

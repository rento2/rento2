const authProvider = {
  // called when the user attempts to log in
  login: async ({ username }: { username: string }) => {
    localStorage.setItem('username', username)
    // accept all username/password combinations
    return await Promise.resolve()
  },
  // called when the user clicks on the logout button
  logout: async () => {
    localStorage.removeItem('username')
    return await Promise.resolve()
  },
  // called when the API returns an error
  checkError: async ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username')
      return await Promise.reject(new Error('Api error on auth request'))
    }
    return await Promise.resolve()
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: async () => {
    return localStorage.getItem('username') != null
      ? await Promise.resolve()
      : await Promise.reject(new Error('No username found in local storage'))
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: async () => await Promise.resolve()
}

export default authProvider

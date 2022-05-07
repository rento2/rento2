import { fetchUtils } from 'react-admin'
import { getItem } from 'helpers/persistanceStorage'
import { IHttpClientOptions } from 'types'

export const httpClient = async (url: string, options = {}): Promise<IHttpClientOptions> => {
  // @ts-expect-error
  if (options.headers == undefined || options.headers == null) {
    // @ts-expect-error
    options.headers = new Headers({ Accept: 'application/json' })
  }

  const auth = JSON.parse(String(getItem('auth')))

  if (auth === null) {
    throw new Error('Login required')
  }

  // @ts-expect-error
  options.headers.set('Authorization', `Bearer ${String(auth.accessToken)}`)

  return await fetchUtils.fetchJson(url, options)
}

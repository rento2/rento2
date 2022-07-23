import '@app/index.scss'

import { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return <Component { ...pageProps } />
}

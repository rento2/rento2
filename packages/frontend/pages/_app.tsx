import '@app/index.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return <Component { ...pageProps } />
}

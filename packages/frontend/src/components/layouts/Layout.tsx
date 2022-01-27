import Head from 'next/head'
import Header from '../modules/Header/Header'
import Footer from '../modules/Footer/Footer'

export const siteTitle = 'Аренда квартир на любой срок. Обслужим, проконтролируем, решим бытовые вопросы'
export const ownersTitle = 'Сдать квартиру быстро, безопасно и легко &#128156;'
export const longTitle = 'Снять хорошую квартиру от 6 месяцев &#128156;'
export const shortTitle = 'Снять квартиру посуточно в центре Москвы &#128156;'

export default function Layout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <Head>
        <link href='/favicon.ico'
          rel='icon'
        />
        <meta
          content='Learn how to build a personal website using Next.js'
          name='description'
        />
        <meta
          content={ `https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg` }
          property='og:image'
        />
        <meta content={ siteTitle }
          name='og:title'
        />
        <meta content='summary_large_image'
          name='twitter:card'
        />
      </Head>
      <div className='wrapper'>
        <div>
          <Header />
          <main>
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

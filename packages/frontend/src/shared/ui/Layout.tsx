import Head from 'next/head'

// Это должно идти от страницы. Здесь это пропсы, которые передаются от хэдера
// Есть такая реализация (отдельный хук) https://github.com/select-name/sharead-frontend/blob/master/src/shared/lib/dom/index.ts
// export const siteTitle = 'Аренда квартир на любой срок. Обслужим, проконтролируем, решим бытовые вопросы'
// export const ownersTitle = 'Сдать квартиру быстро, безопасно и легко &#128156;'
// export const longTitle = 'Снять хорошую квартиру от 6 месяцев &#128156;'
// export const shortTitle = 'Снять квартиру посуточно в центре Москвы &#128156;'

export const Layout = ({
  header, footer, titlePage,
  children
}: {
  header: React.ReactNode
  footer: React.ReactNode
  titlePage?: string
  children: React.ReactNode
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>
          {titlePage}
        </title>
        <link href='/favicon.ico'
          rel='icon'
        />
        <meta
          content='Learn how to build a personal website using Next.js'
          name='description'
        />
        <meta
          content={ `https://og-image.vercel.app/${encodeURI(
            titlePage ?? ''
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg` }
          property='og:image'
        />
        <meta content={ titlePage }
          name='og:title'
        />
        <meta content='summary_large_image'
          name='twitter:card'
        />
      </Head>
      <div className='wrapper'>
        <div>
          {header}
          {children}
        </div>
        {footer}
      </div>
    </>
  )
}

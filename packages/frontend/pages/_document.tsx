import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  override render (): JSX.Element {
    return (
      <Html lang='ru'>
        <Head>
          <link href="https://fonts.googleapis.com"
            rel="preconnect"
          />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Prosto+One&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

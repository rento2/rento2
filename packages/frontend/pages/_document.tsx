import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  override render (): JSX.Element {
    return (
      <Html lang='ru'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

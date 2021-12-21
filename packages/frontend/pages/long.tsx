import Head from 'next/head'
import Layout, { longTitle } from '../src/components/layouts/Layout'

export default function long (): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>
          {longTitle}
        </title>
      </Head>
      <section className='container'>
        <h2>
          Долгосрочная аренда
        </h2>
      </section>
    </Layout>
  )
}

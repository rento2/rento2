import Head from 'next/head'
import Layout, { shortTitle } from '../src/components/layouts/Layout'
import { AgreementShort } from '@templates/docs/AgreementShort'

export default function short (): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>
          {shortTitle}
        </title>
      </Head>
      <section className='container'>
        <h2>
          Краткосрочная аренда
        </h2>
        <AgreementShort />
      </section>
    </Layout>
  )
}

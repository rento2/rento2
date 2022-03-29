import Head from 'next/head'
import Layout, { ownersTitle } from '../src/components/layouts/Layout'
import InsuranceCardList from '@modules/Insurance/InsuranceCard/InsuranceCardList'

export default function owners (): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>
          {ownersTitle}
        </title>
      </Head>
      <section className='container'>
        <InsuranceCardList />
        <h2>
          Собственники
        </h2>
      </section>
    </Layout>
  )
}

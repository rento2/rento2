import Head from 'next/head'
import Layout, { ownersTitle } from '../src/components/layouts/Layout'
import Advantages from '../src/components/modules/Advantages/Advantages'

export default function owners (): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>
          {ownersTitle}
        </title>
      </Head>
      <section className='container'>
        <h2>
          Собственники
        </h2>
      </section>
      <Advantages></Advantages>
    </Layout>
  )
}

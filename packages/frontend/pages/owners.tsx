import { CalculationForm } from '@modules/CalculationForm/CalculationForm'
import Head from 'next/head'
import Layout, { ownersTitle } from '../src/components/layouts/Layout'

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
        <CalculationForm />
      </section>
    </Layout>
  )
}

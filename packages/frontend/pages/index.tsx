import Head from 'next/head'
import Layout, { siteTitle } from '../src/components/layouts/Layout'
import Link from 'next/link'

export default function Home (): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='container'>
        <h2>Главная</h2>
        <Link href='/form'>
          <a>Форма</a>
        </Link>
      </section>
    </Layout>
  )
}

import { GetServerSideProps } from 'next'
import { LongPage } from '@pages-fs/long/LongPage'
import { IApartmentCard } from '@shared/types'

export default function Long ({ data }: { data: IApartmentCard[]}): JSX.Element {
  return (
    <LongPage data={ data } />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3333/api/v1/apartments/list/1/')
  const data = await res.json()

  return { props: data }
}

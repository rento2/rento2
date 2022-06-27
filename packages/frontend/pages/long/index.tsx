import { GetStaticProps } from 'next'
import { LongPage } from '@pages-fs/long/LongPage'
import { getApartmentsList, IApartmentsData } from '@shared/api'

export default function Long ({ data }: { data: IApartmentsData[]}): JSX.Element {
  return (
    <LongPage data={ data } />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getApartmentsList()

  console.log(data)

  return { props: data }
}

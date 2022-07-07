import { GetServerSideProps } from 'next'
import { LongPage } from '@pages-fs/long/LongPage'
import { getApartmentsList, IApartmentsDataList } from '@shared/api'

export default function Long ({ data }: { data: IApartmentsDataList}): JSX.Element {
  return (
    <LongPage data={ data } />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getApartmentsList()

  return { props: data }
}

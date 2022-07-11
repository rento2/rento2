import { GetServerSideProps } from 'next'

import { getApartmentsList, IApartmentsDataList } from '@shared/api'

import { LongPage } from '@pages-fs/long/LongPage'

export default function Long ({ data }: { data: IApartmentsDataList}): JSX.Element {
  return (
    <LongPage data={ data } />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getApartmentsList()

  return { props: data }
}

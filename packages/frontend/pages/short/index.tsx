import { GetServerSideProps } from 'next'

import { getApartmentsList, IApartmentsDataList } from '@shared/api'

import { ShortPage } from '@pages-fs/short/ShortPage'

export default function Short ({ data }: { data: IApartmentsDataList}): JSX.Element {
  return (<ShortPage data={ data } />)
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getApartmentsList()

  return { props: data }
}

import { GetServerSideProps } from 'next'
import { ShortPage } from '@pages-fs/short/ShortPage'
import { getApartmentsList, IApartmentsDataList } from '@shared/api'

export default function Short ({ data }: { data: IApartmentsDataList}): JSX.Element {
  return (<ShortPage data={ data } />)
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getApartmentsList()

  return { props: data }
}

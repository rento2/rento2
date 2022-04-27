import { GetServerSideProps } from 'next'
import { LongOnePage } from '@pages-fs/long-one/LongOnePage'

export default function Long (): JSX.Element {
  return (
    <LongOnePage />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} }
}

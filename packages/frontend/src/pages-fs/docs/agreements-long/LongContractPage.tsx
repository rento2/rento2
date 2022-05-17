import { Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { AgreementLongList } from './ui/AgreementLongList'

export const LongContractPage = (): JSX.Element => {
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <AgreementLongList />
    </Layout>
  )
}

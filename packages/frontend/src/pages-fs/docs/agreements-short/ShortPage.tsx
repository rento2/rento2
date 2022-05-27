import { Layout } from '@shared/ui'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { AgreementShortList } from './ui/AgreementShortList'

export const ShortPage = (): JSX.Element => {
  return (
    <Layout footer={ <Footer /> }
      header={ <Header /> }
    >
      <AgreementShortList />
    </Layout>
  )
}

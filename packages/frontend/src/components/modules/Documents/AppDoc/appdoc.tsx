import SideMenu from '@modules/documents/SideMenu/SideMenu'
import style from './Appdocs.module.scss'
import Layout from '@layouts/Layout'

export default function Docs ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <Layout>
        <div className={[style['flex-wrapper'], 'container'].join(' ')}>
          <SideMenu />
          <div className={style['flexBox']}>{children}</div>
        </div>
      </Layout>
    </>
  )
}

import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import SideMenu from '../SideMenu/SideMenu'
import style from './appdocs.module.scss'

export default function Docs ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <Header />
      <div className={[style['flexWrapper'], 'container'].join(' ')}>
        <SideMenu />
        <div className={style['flexBox']}>{children}</div>
      </div>
      <Footer />
    </>
  )
}

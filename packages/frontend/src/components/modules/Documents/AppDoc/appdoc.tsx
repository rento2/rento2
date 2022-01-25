import SideMenu from '@modules/documents/SideMenu/SideMenu'
import style from './Appdocs.module.scss'
import Layout from '@layouts/Layout'
import { useRef } from 'react'

export default function Docs ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const widhtRef = useRef(null)

  const a = (): void => {
    // console.log(widhtRef.current.parentNode.parentNode.offsetWidht)
    console.log(widhtRef)
  }

  return (
    <>
      <Layout>
        <div
          ref={widhtRef}
          className={[style['flex-wrapper'], 'container'].join(' ')}
          onClick={a}
        >

          <SideMenu />

          <div className={style['flexBox']}>{children}</div>
        </div>
      </Layout>
    </>
  )
}

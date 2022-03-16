import SideMenu from '@modules/documents/SideMenu/SideMenu'
import style from './AppDoc.module.scss'
import Layout from '@layouts/Layout'
import classNames from 'classnames'
import { useWindowDimensions } from '@hooks/useWindowDimensions'
import HeadBar from '../SideMenu/HeadBar/HeadBar'
import { dataMenu } from '../SideMenu/DataMenu/dataMenu'

export default function AppDocs ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const widthWindow = useWindowDimensions()

  return (
    <Layout>
      <div
        className={ classNames(style['flex-wrapper'], ['container']) }
      >

        {
          widthWindow.widthWindow >= 1059
            ? <SideMenu dataMenu={ dataMenu } />
            : <HeadBar dataMenu={ dataMenu } />
          }

        <div className={ style['flexBox'] }>
          {children}
        </div>
      </div>
    </Layout>
  )
}

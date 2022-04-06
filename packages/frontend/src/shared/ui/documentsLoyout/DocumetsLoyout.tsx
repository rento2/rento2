
import style from './DocumentsLoyout.module.scss'
import classNames from 'classnames'
import { stateAcardionList } from 'widgets/accordion-list/modal/stateAccordionList'
import { useWindowDimensions } from 'shared/lib/hooks/index'
import { AccordionList } from 'shared/ui/index'
import { dataMenu } from 'widgets/documents-side-menu/lib/DataMenu/dataMenu'
import HeadBar from 'widgets/documents-side-menu/ui/SideMenu/HeadBar/HeadBar'
import SideMenu from 'widgets/documents-side-menu/ui/SideMenu/SideMenu'
import { usePath } from '../modals/hooks/usePath'

export default function DocumentsLoyout (): JSX.Element {
  const widthWindow = useWindowDimensions()
  const titleText = usePath(dataMenu)

  return (
    <div
      className={ classNames(style['flex-wrapper'], ['container']) }
    >

      {
          widthWindow.widthWindow >= 1059
            ? <SideMenu dataMenu={ dataMenu } />
            : <HeadBar dataMenu={ dataMenu } />
          }

      <div className={ style['doc-container'] }>
        <h1 className={ style['title'] }>
          {titleText}
        </h1>
        <div className={ style['wrapper-box'] }>
          <AccordionList state={ stateAcardionList } />
        </div>
      </div>
    </div>
  )
}

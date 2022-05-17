import { DocsTitle } from '@widgets/documents-layout/docs-title'
import classNames from 'classnames'
import styles from './DocumentsLayout.module.scss'

interface IDocumentsLayout {
  containTitle?: string
  children: JSX.Element
  widthWindowProps: number
  sideMenu: JSX.Element
  headMenu: JSX.Element
  widthProps: number
  pathIcon?: string
  update?: string|number
}

export function DocumentsLayout (props: IDocumentsLayout): JSX.Element {
  const { containTitle, children, widthWindowProps, sideMenu, headMenu, widthProps, pathIcon, update } = props
  return (
    <div className={ classNames(styles['flex-wrapper'], 'container-old') }>
      {
          widthWindowProps >= widthProps
            ? sideMenu
            : headMenu
          }
      <div className={ styles['doc-container'] }>
        {containTitle != null
          ? (
            <DocsTitle containTitle={ containTitle }
              pathIcon={ pathIcon }
              update={ update }
            />
            )
          : null}
        <div className={ styles['wrapper-box'] }>
          {children}
        </div>
      </div>
    </div>
  )
}

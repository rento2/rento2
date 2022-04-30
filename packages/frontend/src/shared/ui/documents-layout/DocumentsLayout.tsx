import { DocsTitle } from '@widgets/docs-title'
import classNames from 'classnames'
import styles from './DocumentsLayout.module.scss'

interface IDocumentsLayout {
  titleText?: string
  children: JSX.Element
  widthWindowProps: number
  sideMenu: JSX.Element
  headMenu: JSX.Element
  widthProps: number
  titleIcon?: string|undefined
  update?: string
}

export function DocumentsLayout ({ titleText, children, widthWindowProps, sideMenu, headMenu, widthProps, titleIcon, update }: IDocumentsLayout): JSX.Element {
  return (
    <div className={ classNames(styles['flex-wrapper'], 'container-old') }>
      {
          widthWindowProps >= widthProps
            ? sideMenu
            : headMenu
          }

      <div className={ styles['doc-container'] }>
        {titleText != null
          ? (
            <DocsTitle titleIcon={ titleIcon }
              titleText={ titleText }
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

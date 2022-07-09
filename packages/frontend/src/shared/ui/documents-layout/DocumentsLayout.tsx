import classNames from 'classnames'
import styles from './DocumentsLayout.module.scss'
import { ErrorChoice } from '@widgets/popups/error/error-choice/ErrorChoice'

interface IDocumentsLayout {
  children: JSX.Element
  widthWindowProps: number
  sideMenu: JSX.Element
  headMenu: JSX.Element
  widthProps: number
  docTitle?: JSX.Element

}

export function DocumentsLayout (props: IDocumentsLayout): JSX.Element {
  const { docTitle, children, widthWindowProps, sideMenu, headMenu, widthProps } = props
  return (
    <div className={ classNames(styles['flex-wrapper'], 'container-old') }>
      {
          widthWindowProps >= widthProps
            ? sideMenu
            : headMenu
          }
      <div className={ styles['doc-container'] }>
        {docTitle}
        <ErrorChoice />
        <div className={ styles['wrapper-box'] }>
          {children}
        </div>
      </div>
    </div>
  )
}

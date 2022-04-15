import classNames from 'classnames'
import style from './DocumentsLayout.module.scss'

interface IDocumentsLayout {
  titleText: string
  children: JSX.Element
  widthWindowProps: number
  sideMenu: JSX.Element
  headMenu: JSX.Element
  widthProps: number
  pagePath?: string
}

export function DocumentsLayout ({ titleText, children, widthWindowProps, sideMenu, headMenu, widthProps, pagePath }: IDocumentsLayout): JSX.Element {
  return (
    <div
      className={ classNames(style['flex-wrapper'], 'container-old') }
    >
      {
          widthWindowProps >= widthProps
            ? sideMenu
            : headMenu
          }

      <div className={ style['doc-container'] }>
        {(pagePath !== '/docs/agreements')
          ? (
            <h1 className={ style['title'] }>
              {titleText}
            </h1>
            )
          : ''}
        <div className={ style['wrapper-box'] }>
          {children}
        </div>
      </div>
    </div>
  )
}

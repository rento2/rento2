import styles from './DocsTitle.module.scss'

interface IDocsTitle {
  containTitle?: string
  pathIcon?: string
  update?: string|number
}

const FAQ = 'Частые вопросы'
const AGREEMENTS = 'Пользовательское соглашение'

export const DocsTitle = ({ containTitle, pathIcon, update }: IDocsTitle): JSX.Element => {
  function DocsSwich (title?: string): JSX.Element {
    switch (title) {
      case FAQ:
        return (
          <div className={ styles['title__icon'] }>
            <img src={ pathIcon } />
          </div>
        )
      case AGREEMENTS :
        return (
          <p className={ styles['title__update'] }>
            {update}
          </p>
        )
      default:
        return (
          <>
            <button className={ styles['title__icon-button'] }
              type='button'
            >
              <img src={ pathIcon } />
            </button>
            <p className={ styles['title__update'] }>
              {update}
            </p>
          </>
        )
    }
  }
  return (
    <div className={ styles['title'] }>
      <h1 className={ styles['title__text'] }>
        {containTitle}
      </h1>
      {DocsSwich(containTitle)}
    </div>
  )
}

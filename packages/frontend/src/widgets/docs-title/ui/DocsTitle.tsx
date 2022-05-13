import styles from './DocsTitle.module.scss'
import Image from 'next/image'

interface IDocsTitle {
  titleText?: string|undefined
  pathIcon?: string| undefined
  update?: string|number|undefined
}

const FAQ = 'Частые вопросы'
const AGREEMENTS = 'Пользовательское соглашение'

export const DocsTitle = ({ titleText, pathIcon, update }: IDocsTitle): any => {
  function DocsSwich (title: string|undefined): JSX.Element {
    switch (title) {
      case FAQ:
        return (
          <div className={ styles['title__icon'] }>
            <Image
              height={ 58 }
              src={ pathIcon }
              width={ 61 }
            />
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
              <Image
                height={ 32 }
                src={ pathIcon }
                width={ 32 }
              />
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
        {titleText}
      </h1>
      {DocsSwich(titleText)}
    </div>
  )
}

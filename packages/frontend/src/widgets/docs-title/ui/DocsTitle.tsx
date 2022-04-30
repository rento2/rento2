import styles from './DocsTitle.module.scss'
import Image from 'next/image'

interface IDocsTitle {
  titleText?: string|number|undefined
  titleIcon?: string|undefined
  update?: string|number|undefined
}

export const DocsTitle = ({ titleText, titleIcon, update }: IDocsTitle): any => {
  switch (titleText) {
    case 'Частые вопросы':
      return (
        <div className={ styles['title'] }>
          <h1 className={ styles['title__text'] }>
            {titleText}
          </h1>
          <div className={ styles['title__icon'] }>
            <Image
              height={ 58 }
              src={ titleIcon }
              width={ 61 }
            />
          </div>
        </div>
      )
    case 'Пользовательское соглашение':
      return (
        <div className={ styles['title'] }>
          <h1 className={ styles['title__text'] }>
            {titleText}
          </h1>
          <p className={ styles['title__update'] }>
            {update}
          </p>
        </div>
      )

    default:
      return (
        <div className={ styles['title'] }>
          <h1 className={ styles['title__text'] }>
            {titleText}
          </h1>
          <button className={ styles['title__icon-button'] }
            type='button'
          >
            <Image
              height={ 32 }
              src={ titleIcon }
              width={ 32 }
            />
          </button>
          <p className={ styles['title__update'] }>
            {update}
          </p>
        </div>
      )
  }
}

import { FC, useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { ButtonGeneral, IconArrowDown, IconArrowUp } from '@shared/ui'
import styles from './DescriptionApartment.module.scss'

interface IDescriptionText {
  text: string
  classProps?: string
}

export const DescriptionApartment: FC<IDescriptionText> = ({ text, classProps }) => {
  const [isVisibleText, setIsVisibleText] = useState(true)
  const [isVisibleButton, setVisibleButton] = useState(false)

  const loadHandler = (e: React.SyntheticEvent<HTMLParagraphElement>): void => {
    const textElement = e.currentTarget.getElementsByTagName('p')[0]
    if (textElement?.clientHeight !== undefined) {
      setVisibleButton(textElement?.clientHeight < textElement?.scrollHeight)
    }
  }

  return (
    <section className={ classNames(styles['description'], classProps) }
      onLoad={ loadHandler }
    >

      <h2 className={ classNames(styles['description__heading']) }>
        Описание
      </h2>
      <p
        className={ classNames(styles['description__text'], isVisibleText ? styles['description__text_visible'] : '') }
      >
        { text }
      </p>
      <div className={ classNames(styles['description__key-circle']) }>
        <Image alt='Золотой ключик'
          className={ classNames(styles['description__key']) }
          height={ 68 }
          src='/images/long/golden-key.svg'
          width={ 59 }
        />
      </div>
      { isVisibleButton && (
        <ButtonGeneral classProps={ classNames(styles['description__btn']) }
          font='xs'
          full='text'
          grade='neutral'
          height='40'
          onClick={ () => setIsVisibleText(!isVisibleText) }
        >
          { isVisibleText
            ? (
              <>
                Подробнее
                <IconArrowDown
                  classProps={ classNames(styles['description__btn__icon']) }
                />
              </>
              )
            : (
              <>
                Свернуть
                <IconArrowUp
                  classProps={ classNames(styles['description__btn__icon']) }
                />
              </>
              )
      }
        </ButtonGeneral>) }
    </section>
  )
}

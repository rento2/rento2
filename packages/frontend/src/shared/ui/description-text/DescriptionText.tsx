import { FC, useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { IconArrowDown, IconArrowUp } from '@shared/ui'
import styles from './DescriptionText.module.scss'

interface IDescriptionText {
  text?: string
  classProps?: string | undefined
}

export const DescriptionText: FC<IDescriptionText> = ({ text, classProps }) => {
  const [isVisibleText, setIsVisibleText] = useState(true)

  const isVisible = (): void => {
    setIsVisibleText(!isVisibleText)
  }

  return (
    <section className={ classNames(styles['description'], classProps) }>

      <h1 className={ classNames(styles['description__heading']) }>
        Описание
      </h1>
      <p className={ classNames(styles['description__text'], { [styles['description__text_visible']]: isVisibleText }) }>
        { text ??
        ('Фильтруем объявления со всех ресурсов и публикуем только надёжные. Проверяем собственников и документы на квартиру. Составляем договор, который будет иметь юридическую силу. Дадём гарантию 6 месяцев на проживание.')
        }
      </p>
      <div className={ classNames(styles['description__key__circle']) }>
        <div className={ classNames(styles['description__key']) }>
          <Image alt='Golden key'
            height={ 68 }
            src='/images/long/golden-key.svg'
            width={ 59 }
          />
        </div>
      </div>
      <button className={ classNames(styles['description__btn']) }
        onClick={ isVisible }
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
      </button>
    </section>
  )
}

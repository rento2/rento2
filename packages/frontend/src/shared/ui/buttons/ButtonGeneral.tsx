import classNames from 'classnames'
import { FC } from 'react'
import styles from './ButtonGeneral.module.scss'

// Ширину указываем отдельно для каждой кнопки через classProps (можно передать любой класс)
export interface IButton {
  type?: 'submit' | 'reset' | 'button'
  href?: string
  disabled?: boolean
  round?: boolean
  grade?: 'primary' | 'secondary' | 'neutral' | 'accent' | 'iris' // accent нужен для текстовых кнопок
  full?: 'filled' | 'stroke' | 'outlined' | 'text' | 'icon' // stroke для чего вообще? Мб удалить его?
  font: 'l' | 'm' | 's'
  height: '56' | '48' | '44' | '40'
  classProps?: string
  onClick?: () => void
  children: React.ReactNode | string
}

export const ButtonGeneral: FC<IButton> = ({ type, href, disabled = false, round = false, grade = 'primary', full = 'filled', font, height, classProps, onClick, children }) => {
  const Component = href != null ? 'a' : 'button'

  const stylesRound = styles['round'] ?? ''
  // предлагаю цвет и заполненность разнести в разные классы тк для outlined цвет не нужен а у text есть свой акцентный
  // const stylesColor = styles[`grade-${grade}-full-${full}`] ?? ''
  const stylesColor = styles[`grade-${grade}`] ?? ''
  const styleFilling = styles[`full-${full}`] ?? ''
  const stylesFont = styles[`font-${font}`] ?? ''
  const stylesHeight = styles[`height-${height}`] ?? ''

  return (
    <Component
      className={ classNames(
        classProps,
        styles['button'],
        {
          [stylesRound]: round,
          [stylesColor]: true,
          [styleFilling]: true,
          [stylesFont]: true,
          [stylesHeight]: true
        }
      ) }
      disabled={ disabled }
      href={ href }
      type={ type }
      onClick={ onClick }
    >
      {children}
    </Component>
  )
}

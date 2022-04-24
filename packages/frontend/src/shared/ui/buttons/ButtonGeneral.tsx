import classNames from 'classnames'
import { FC } from 'react'
import styles from './ButtonGeneral.module.scss'

// Ширину указываем отдельно для каждой кнопки через classProps (можно передать любой класс)
export interface IButton {
  type?: 'submit' | 'reset' | 'button'
  href?: string
  disabled?: boolean
  round?: boolean
  grade?: 'primary' | 'secondary' | 'neutral'
  full?: 'filled' | 'stroke'
  font: 'l' | 'm' | 's'
  height: '56' | '48' | '44' | '40'
  classProps?: string
  onClick?: () => void
  children: React.ReactNode | string
}

export const ButtonGeneral: FC<IButton> = ({ type, href, disabled = false, round = false, grade = 'primary', full = 'filled', font, height, classProps, onClick, children }) => {
  const Component = href != null ? 'a' : 'button'

  const stylesRound = styles['round'] ?? ''
  const stylesColor = styles[`grade-${grade}-full-${full}`] ?? ''
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

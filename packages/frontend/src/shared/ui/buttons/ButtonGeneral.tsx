import classNames from 'classnames'
import { FC } from 'react'
import styles from './ButtonGeneral.module.scss'

// Ширину указываем отдельно для каждой кнопки через classProps (можно передать любой класс)
export interface IButton {
  text?: string
  type?: 'submit' | 'reset' | 'button'
  href?: string
  disabled?: boolean
  round?: boolean
  grade?: 'primary' | 'secondary' | 'neutral'
  full?: 'filled' | 'stroke'
  font: 'l' | 'm' | 's'
  height: '56' | '48' | '44' | '40'
  classProps?: string
  icon?: JSX.Element
  onClick?: () => void
}

export const ButtonGeneral: FC<IButton> = ({ text, type, href, disabled = false, round = false, grade = 'primary', full = 'filled', font, height, classProps, icon, onClick }) => {
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
      {text}
      {icon}
    </Component>
  )
}

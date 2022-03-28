import classNames from 'classnames'
import { FC } from 'react'
import styles from './ButtonGeneral.module.scss'

interface IButton {
  text: string
  type?: 'submit' | 'reset' | 'button'
  href?: string
  disabled?: boolean
  round?: boolean
  grade?: 'primary' | 'secondary' | 'neutral'
  full?: 'filled' | 'stroke'
  size: 'l' | 'm' | 's' | 'xs'
}

export const ButtonGeneral: FC<IButton> = ({ text, type, href, disabled = false, round = false, grade = 'primary', full = 'filled', size }) => {
  const Component = href != null ? 'a' : 'button'

  const stylesRound = styles['round'] ?? ''
  const stylesColor = styles[`grade-${grade}-full-${full}`] ?? ''
  const stylesSize = styles[`size-${size}`] ?? ''

  return (
    <Component
      className={ classNames(
        styles['button'],
        {
          [stylesRound]: round,
          [stylesColor]: true,
          [stylesSize]: true
        }
      ) }
      disabled={ disabled }
      href={ href }
      type={ type }
    >
      {text}
    </Component>
  )
}

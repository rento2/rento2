import classNames from 'classnames'
import { RefObject, MouseEvent } from 'react'
import styles from './ButtonIcon.module.scss'

export interface IButtonIcon {
  children?: JSX.Element
  size: '40' | '32' | '24'
  classProps?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  grade?: 'iris' | 'neutral' // цвет кнопки с иконкой (пока только iris)
  full: 'filled' | 'stroke' // должна ли иконка быть заполнена или только контуром
  disabled?: boolean
  background?: 'iris' | 'none' // бэкграунд кнопки
  refProp?: RefObject<HTMLButtonElement>
}

// Цвет передаваемых иконок может меняться за счет fill и stroke, Если цвет иконки меняется за счет stroke, то нужно передать full = stroke, иначе full = filled.
export function ButtonIcon ({ children, size, classProps, onClick, grade = 'iris', full, disabled, background = 'none', refProp }: IButtonIcon): JSX.Element {
  const stylesColor = styles[`grade-${grade}-full-${full}`] ?? ''
  const stylesSize = styles[`size-${size}`] ?? ''
  const stylesBackground = styles[`bg-${background}-full-${full}`] ?? ''

  return (
    <button
      ref={ refProp }
      className={
      classNames(
        classProps,
        styles['button-icon'],
        stylesSize,
        stylesColor,
        stylesBackground
      ) }
      disabled={ disabled }
      onClick={ onClick }
    >
      {children}
    </button>
  )
}

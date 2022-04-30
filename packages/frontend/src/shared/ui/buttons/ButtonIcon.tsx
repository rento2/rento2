import classNames from 'classnames'
import styles from './ButtonIcon.module.scss'

interface IButtonIcon {
  children?: JSX.Element
  size: '40' | '32' | '24'
  classProps?: string
  onClick: () => void
  grade?: 'iris' | 'neutral' // цвет кнопки с иконкой (пока только iris)
  full: 'filled' | 'stroke' // должна ли иконка быть заполнена или только контуром
  disabled?: boolean
  background?: 'iris' | 'none' // бэкграунд кнопки
}

// Цвет передаваемых иконок может меняться за счет fill и stroke, Если цвет иконки меняется за счет stroke, то нужно передать full = stroke, иначе full = filled.
export function ButtonIcon ({ children, size, classProps, onClick, grade = 'iris', full, disabled, background = 'none' }: IButtonIcon): JSX.Element {
  const stylesColor = styles[`grade-${grade}-full-${full}`] ?? ''
  const stylesSize = styles[`size-${size}`] ?? ''
  const stylesBackground = styles[`bg-${background}-full-${full}`] ?? ''

  return (
    <button
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

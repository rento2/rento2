import classNames from "classnames"
import styles from "./ButtonIcon.module.scss";

interface IButtonIcon {
  icon?: JSX.Element
  children?: JSX.Element
  size: '40' | '32' | '24'
  classProps?: string
  onClick: () => void
  grade: 'iris' | 'neutral'
  iconFill?: boolean
  disabled?: boolean
}

export function ButtonIcon ({ icon, children, size, classProps, onClick, grade, iconFill, disabled }: IButtonIcon): JSX.Element {
  const stylesColor = styles[`grade-${grade}`] ?? ''
  const stylesSize = styles[`size-${size}`] ?? ''

  return (
    <button className={
      classNames(
        classProps,
        styles['button-icon'],
        stylesSize,
        stylesColor
      )

    }
      disabled={disabled}
      onClick={onClick}
    >
      {icon || children}
    </button>
  )
}

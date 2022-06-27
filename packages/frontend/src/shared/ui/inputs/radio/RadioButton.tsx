import { ForwardedRef, forwardRef, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './RadioButton.module.scss'

interface IRadioButton {
  label?: string
  value: string
  checked: boolean
  classProps?: string
  onChange: () => void
  icon: ReactNode
  name: string
}

export const RadioButton = forwardRef(({ value, onChange, label, classProps, icon, name, checked }: IRadioButton,
  ref: ForwardedRef<HTMLInputElement>) => (
    <label className={ classNames('flex-center', styles.label, classProps, { [styles.checked]: checked }) }>
      {icon}
      {label}
      <input
        ref={ ref }
        className={ styles.radio }
        name={ name }
        type="radio"
        value={ value }
        onChange={ onChange }
      />
    </label>
))

RadioButton.displayName = 'RadioButton'

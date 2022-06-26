import { IconTick } from '@shared/ui'
import classNames from 'classnames'
import { ChangeEvent } from 'react'
import styles from './Checkbox.module.scss'

interface ICheckboxProps {
  label: string | JSX.Element
  id: string
  conatinerClass?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  defaultChecked?: boolean
}

export function Checkbox ({ label, id, conatinerClass, onChange, defaultChecked = false }: ICheckboxProps): JSX.Element {
  return (
    <label
      className={ classNames(styles['checkbox__label'], conatinerClass) }
      htmlFor={ id }
    >
      <input
        className={ styles['checkbox__hidden-input'] }
        defaultChecked={ defaultChecked }
        id={ id }
        name={ id }
        type="checkbox"
        onChange={ onChange }
      />
      <span className={ styles['checkbox__checkbox'] }>
        <IconTick classProps={ styles['checkbox__icon'] } />
      </span>
      {label}
    </label>
  )
}

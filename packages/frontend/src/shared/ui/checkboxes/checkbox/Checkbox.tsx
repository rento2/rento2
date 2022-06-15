import { IconTick } from '@shared/ui'
import classNames from 'classnames'
import { ChangeEvent } from 'react'
import styles from './Checkbox.module.scss'

interface ICheckboxProps {
  label: string | JSX.Element
  id: string
  conatinerClass?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Checkbox ({ label, id, conatinerClass, onChange }: ICheckboxProps): JSX.Element {
  return (
    <div className={ classNames(styles['checkbox__container'], conatinerClass) }>
      <label
        className={ styles['checkbox__label'] }
        htmlFor={ id }
      >
        <input
          className={ styles['checkbox__hidden-input'] }
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
    </div>
  )
}

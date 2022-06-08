import { ChangeEvent, FC } from 'react'
import classNames from 'classnames'

import styles from './DoubleInput.module.scss'

interface IValue {
  min: string
  max: string
}

interface IDoubleInput {
  classProps?: string
  value: IValue
  onChange: (value: IValue) => void
  placeholder?: IValue
  unit?: string
}

export const DoubleInput: FC<IDoubleInput> = ({
  value,
  onChange,
  classProps,
  placeholder,
  unit
}) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const range = { ...value, [target.name]: target.value }
    onChange(range)
  }

  return (
    <div className={ classNames(styles.double, classProps) }>
      <fieldset>
        <label className={ styles.double__label }>
          От
          <input
            autoComplete="off"
            className={ styles.double__input }
            name='min'
            placeholder={ placeholder?.min ?? '' }
            type="number"
            value={ value?.min ?? '' }
            onChange={ handleChange }
          />
          {unit}
        </label>
      </fieldset>
      <div className={ classNames(styles.double__devided, 'flex-center') } />
      <fieldset>
        <label className={ styles.double__label }>
          До
          <input
            autoComplete="off"
            className={ styles.double__input }
            name='max'
            placeholder={ placeholder?.max ?? '' }
            type="number"
            value={ value?.max ?? '' }
            onChange={ handleChange }
          />
          {unit}
        </label>
      </fieldset>
    </div>
  )
}

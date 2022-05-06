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
}

export const DoubleInput: FC<IDoubleInput> = ({ value, onChange, classProps }) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const range = { ...value, [target.name]: target.value }
    onChange(range)
  }

  return (
    <div className={ classNames(styles.double, classProps) }>
      <section>
        <label className={ styles.double__label }>
          От
          <input
            autoComplete="off"
            className={ styles.double__input }
            name='min'
            placeholder="50000"
            type="number"
            value={ value?.min ?? '' }
            onChange={ handleChange }
          />
          ₽
        </label>
      </section>
      <div className={ classNames(styles.double__devided, 'flex-center') } />
      <section>
        <label className={ styles.double__label }>
          До
          <input
            autoComplete="off"
            className={ styles.double__input }
            name='max'
            placeholder="2000000"
            type="number"
            value={ value?.max ?? '' }
            onChange={ handleChange }
          />
          ₽
        </label>
      </section>
    </div>
  )
}

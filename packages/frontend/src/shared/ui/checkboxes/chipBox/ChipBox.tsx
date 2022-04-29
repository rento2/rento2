import { FC } from 'react'
import classNames from 'classnames'

import styles from './ChipBox.module.scss'

interface IChipBox {
  chips: string[]
  value: string[]
  onChange: (value: string[]) => void
}

export const ChipBox: FC<IChipBox> = ({ value, onChange, chips }) => {
  const handleSelect = (name: string) => () => {
    if (value.includes(name)) {
      onChange(value.filter(chipName => chipName !== name))
    } else onChange([...value, name])
  }

  return (
    <div className={ styles.select }>
      {chips.map((chip, index) => (
        <button key={ index }
          className={ classNames(styles.select__chip, { [styles['select__chip-active']]: value.includes(chip) }) }
          type='button'
          onClick={ handleSelect(chip) }
        >
          {chip}
        </button>))}
    </div>
  )
}

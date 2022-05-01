import { FC } from 'react'
import ReactSelect, { components, DropdownIndicatorProps, Props as SelectProps } from 'react-select'

import { IconArrowDown, IconArrowUp } from '@shared/ui'
import styles from './Select.module.scss'

const DropdownIndicator: FC<DropdownIndicatorProps> = (props) => {
  return (
    <components.DropdownIndicator { ...props }>
      {props.selectProps.menuIsOpen ? <IconArrowUp /> : <IconArrowDown />}
    </components.DropdownIndicator>
  )
}

export const Select: FC<SelectProps> = (props) => {
  return (
    <ReactSelect
      className={ styles['styled-select'] }
      classNamePrefix='styled-select'
      components={ { DropdownIndicator } }
      { ...props }
    />
  )
}

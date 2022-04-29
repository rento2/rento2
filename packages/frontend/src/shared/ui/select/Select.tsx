/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FC } from 'react'
import ReactSelect, { components, SingleValue } from 'react-select'

import { IconArrowDown, IconArrowUp } from '@shared/ui'

const customprovided = {
  option: (provided: any, state: any) => {
    return {
      ...provided,
      position: 'relative',
      ...state.isSelected && {
        ':before': {
          position: 'absolute',
          top: '11px',
          right: '13px',
          backgroundColor: '#2d2f39',
          borderRadius: 10,
          content: '" "',
          display: 'block',
          height: 6,
          width: 6
        }
      },
      padding: '11px 16px',
      backgroundColor: state.isDisabled
        ? undefined
        : state.isSelected
          ? '#F0F3F8'
          : state.isFocused
            ? '#F0F3F8'
            : undefined,
      color: state.isDisabled
        ? '#ccc'
        : state.isSelected
          ? '#2d2f39'
          : state.data.color,
      cursor: state.isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...provided[':active'],
        backgroundColor: !state.isDisabled
          ? state.isSelected
            ? '#F0F3F8'
            : '#F0F3F8'
          : undefined
      }
    }
  },
  control: (_provided: any, state: any) => ({
    height: '40px',
    width: '200px',
    fontFamily: '"TTTravelsNext-Md", "Montserrat", sans-serif;',
    fontSize: '10px',
    fontStyle: 'normal',
    lineHeight: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    outline: '0',
    border: `1px solid ${state.isFocused ? '#9E9FF5' : '#D9DADD'}`,
    borderRadius: '4px',
    cursor: 'default',
    padding: '8px 10px',

    '&:hover': {
      borderColor: '#9E9FF5'
    }
  }),
  menu: (provided: any) => ({
    ...provided,
    fontFamily: '"TTTravelsNext-Md", "Montserrat", sans-serif;',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '15px',
    margin: '0',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '0px 0px 8px 8px',
    border: 'none'
  }),
  valueContainer: () => ({
    height: '15px'
  }),
  menuList: () => ({ padding: '10px 4px' }),
  indicatorSeparator: () => ({ display: 'none' }),
  clearIndicator: () => ({ display: 'none' })
}

const DropdownIndicator: FC<any> = (props) => {
  return (
    <components.DropdownIndicator { ...props }>
      {props.selectProps.menuIsOpen ? <IconArrowUp /> : <IconArrowDown />}
    </components.DropdownIndicator>
  )
}

interface IOption {
  value: string
  label: string
}

interface ISelect {
  value: IOption | undefined
  options: IOption[]
  onChange: (newValue: SingleValue<IOption | undefined>) => void
}

export const Select: FC<ISelect> = ({ value, options, onChange }) => {
  return (
    <ReactSelect
      components={ { DropdownIndicator } }
      isSearchable={ false }
      options={ options }
      styles={ customprovided }
      value={ value }
      onChange={ onChange }
    />
  )
}

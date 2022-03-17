/* eslint-disable react/jsx-closing-tag-location */

// import React from 'react'

import Select from 'react-select'
import IconGoWalking from '@elements/icons/IconGoWalking'
import IconGoDriving from '@elements/icons/IconGoDriving'
import classNames from 'classnames'
import styles from './CalculationDropdown.module.scss'


const options = [
  { value: 'Choose', label: 'Выбрать' },
  { value: '5 minutes', label: '5 минут' },
  { value: '10 minutes', label: '10 минут' },
  { value: '15 minutes', label: '15 минут' },
  { value: '20 minutes', label: '20 минут' },
  { value: '25+ minutes', label: '25+ минут' }
]

export function CalculationDropdown (): JSX.Element {

  const style = {
    control: (base: any) => ({
      ...base,
        marginLeft:"10px",
        border: 0,
        boxShadow: "none",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "22px",

    }),
      option: (base: any, state:any) => ({
        ...base,
        paddingLeft:"22px",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "20px",
        backgroundColor: state.isSelected ? 'transparent' : 'transparent',
        color: state.isSelected ? '#6f57eb' : '#7F8085',
      }),
      singleValue: (base: any) => ({
        ...base,
        color: "#7F8085"
      }),
      input: (base: any) => ({
        ...base,
        color: "#fff"
      }),
      container: (base: any) => ({
        ...base,
        flex: 2
      })
  };
  return (
    <div className={ styles['container'] }>
            <Select
              styles={style}
              defaultValue={options[0]}
              components={{ DropdownIndicator: null }}
              options={options} />

          <div className={ styles['route'] }>
            <label>
              <input className={ styles['input-hidden'] }
                defaultChecked={ true }
                name="route"
                type="radio"
                value="man-route"
              />

                <IconGoWalking classProps={ classNames(styles['img-route']) }/>
            </label>
            <label>
              <input className={ styles['input-hidden'] }
                name="route"
                type="radio"
                value="bus-route"
              />
                <IconGoDriving classProps={ classNames(styles['img-route']) }/>

            </label>
          </div>
    </div>
  )
}

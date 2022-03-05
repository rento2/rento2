/* eslint-disable react/jsx-closing-tag-location */

import { Select } from 'antd'
// import React from 'react'
import styles from './CalculationDropdown.module.scss'
import 'antd/dist/antd.css'
import GoWalkingIcon from '@elements/icons/GoWalkingIcon'
import GoDrivingIcon from '@elements/icons/GoDrivingIcon'

const { Option } = Select

// function handleChange (value: string) {
//   console.log(`selected ${value}`)
// }

const minutes: string[] = ['Выбрать', '5 минут', '10 минут', '15 минут', '20 минут', '25+ минут']

export function CalculationDropdown (): JSX.Element {
  return (
    <div className={ styles['container'] }>
      <Select
        defaultValue="Выбрать"
        showArrow={ false }
      >
        {
          minutes.map(min =>
            (<Option key={ min }
              value={ min }
            >
              {min}
            </Option>))
        }

      </Select>

      {/* <Select
        defaultValue="Выбрать"
        showArrow={ false }
        onChange={ handleChange }
      >
        <Option value="Choose">
          Выбрать
        </Option>
        <Option value="5 minutes">
          5 минут
        </Option>
        <Option value="10 minutes">
          10 минут
        </Option>
        <Option value="15 minutes">
          15 минут
        </Option>
        <Option value="20 minutes">
          20 минут
        </Option>
        <Option value="25 minutes">
          25+ минут
        </Option>
      </Select> */}
      <div className={ styles['route'] }>
        <label>
          <input className={ styles['input-hidden'] }
            defaultChecked={ true }
            name="route"
            type="radio"
            value="man-route"
          />

          <div className={ styles['img-route'] }>
            <GoWalkingIcon />
          </div>
        </label>
        <label>
          <input className={ styles['input-hidden'] }
            name="route"
            type="radio"
            value="bus-route"
          />
          <div className={ styles['img-route'] }>
            <GoDrivingIcon />
          </div>

        </label>
      </div>
    </div>
  )
}

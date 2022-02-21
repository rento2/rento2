/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import React, { useState } from 'react'
import styles from './CalculationDropdown.module.scss'

interface IDropdownProps {
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

const NOOP = () => {}

export function CalculationDropdown ({ isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen)
  const [name, setName] = useState('Выбрать')
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={ styles['container'] }
      tabIndex={ -1 }
      onBlur={ () => { setIsDropdownOpen(false) } }
    >
      <div className={ styles['calculation-dropdown'] }
        onClick={ handleOpen }
      >
        {name}
        {!isDropdownOpen && (<span className={ styles['calculation-dropdown__arrow'] } />)}
        {isDropdownOpen && (<span className={ styles['calculation-dropdown__arrow-vice-versa'] } />)}
      </div>
      {isDropdownOpen && (
        <div>
          <div className={ styles['calculation-dropdown__listContainer'] }
            onClick={ () => setIsDropdownOpen(false) }
          >
            <div className={ styles['calculation-dropdown__list'] }>
              <div className={ styles['calculation-dropdown__row'] }>
                <div className={ styles['calculation-dropdown__item'] }
                  onClick={ () => { setName('Выбрать'); console.log(1) } }
                >
                  Выбрать
                </div>
                <div className={ styles['calculation-dropdown__item'] }
                  onClick={ () => setName('15 минут') }
                >
                  15 минут
                </div>
              </div>
              <div className={ styles['calculation-dropdown__row'] }>
                <div className={ styles['calculation-dropdown__item'] }
                  onClick={ () => setName('5 минут') }
                >
                  5 минут
                </div>
                <div className={ styles['calculation-dropdown__item'] }
                  onClick={ () => setName('20 минут') }
                >
                  20 минут
                </div>
              </div>
              <div className={ styles['calculation-dropdown__row'] }>
                <div className={ styles['calculation-dropdown__item'] }
                  onClick={ () => setName('10 минут') }
                >
                  10 минут
                </div>
                <div className={ styles['calculation-dropdown__item'] }
                  onClick={ () => setName('25 минут') }
                >
                  25 минут
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={ styles['calculation-owner-route'] }>
        <label>
          <input checked={ true }
            className={ styles['calculation-owner-input-hidden'] }
            name="route"
            type="radio"
            value="man-route"
          />
          <svg className={ styles['calculation-owner-img-route'] }
            height="32"
            viewBox="0 0 32 32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M25.3333 14.6669L22.5418 13.0291L19.5545 9.65614L13.9995 8L6.21802 14.3183L7.99958 16.6671L12.6954 12.9796L11.919 16.7628L10.6661 21.3337L6.66542 26.0006L9.33216 28.0006L13.5387 23.6725L15.3329 20.0004L16.6657 23.3338L17.3324 28.0006H20.6658L20.043 20.4014L18.7338 17.1757L19.3331 14.0002L21.0136 15.6723L23.9999 17.3336L25.3333 14.6669Z" />
            <path d="M17.3329 7.99951C18.8057 7.99951 19.9996 6.80557 19.9996 5.33276C19.9996 3.85996 18.8057 2.66602 17.3329 2.66602C15.8601 2.66602 14.6661 3.85996 14.6661 5.33276C14.6661 6.80557 15.8601 7.99951 17.3329 7.99951Z" />
          </svg>
        </label>
        <label>
          <input className={ styles['calculation-owner-input-hidden'] }
            name="route"
            type="radio"
            value="bus-route"
          />
          <svg className={ styles['calculation-owner-img-route'] }
            height="32"
            viewBox="0 0 32 32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.33337 21.3337C5.33337 22.507 5.85337 23.5603 6.66671 24.2937V26.667C6.66671 27.4003 7.26671 28.0003 8.00004 28.0003H9.33337C10.0667 28.0003 10.6667 27.4003 10.6667 26.667V25.3337H21.3334V26.667C21.3334 27.4003 21.9334 28.0003 22.6667 28.0003H24C24.7334 28.0003 25.3334 27.4003 25.3334 26.667V24.2937C26.1467 23.5603 26.6667 22.507 26.6667 21.3337V8.00033C26.6667 3.33366 21.8934 2.66699 16 2.66699C10.1067 2.66699 5.33337 3.33366 5.33337 8.00033V21.3337ZM10 22.667C8.89337 22.667 8.00004 21.7737 8.00004 20.667C8.00004 19.5603 8.89337 18.667 10 18.667C11.1067 18.667 12 19.5603 12 20.667C12 21.7737 11.1067 22.667 10 22.667ZM22 22.667C20.8934 22.667 20 21.7737 20 20.667C20 19.5603 20.8934 18.667 22 18.667C23.1067 18.667 24 19.5603 24 20.667C24 21.7737 23.1067 22.667 22 22.667ZM24 14.667H8.00004V8.00033H24V14.667Z" />
          </svg>
        </label>
      </div>
    </div>
  )
}

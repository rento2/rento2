import { ButtonGeneral, Checkbox, ModalBase, SwitchBase } from '@shared/ui'
import classNames from 'classnames'
import { ChangeEvent, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useWindowSize } from 'react-use'

import styles from './PersonalSearchForm.module.scss'

interface IPersonalSearchForm {
  isOpen: boolean
  onClose: () => void
}

export function PersonalSearchForm ({ isOpen, onClose }: IPersonalSearchForm): JSX.Element {
  const defaultValues = {
    'use-telegram': false,
    number: '',
    telegram: '',
    'agreement-checkbox': false
  }

  const [phoneInput, setPhoneInput] = useState('')
  const { width } = useWindowSize()

  const { register, handleSubmit, control, formState: { isValid }, watch } = useForm({ mode: 'onChange', defaultValues })
  const switchState = watch('use-telegram', false)

  function handleInputChange (e: ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value
    // чистим строку от всего лишнего
    const phoneString = maskPhoneNumber(value)

    setPhoneInput(phoneString)
  }

  // // маскирование номера (шоб красиво было)
  function maskPhoneNumber (number: string): string {
    const phoneValue = number
      .replace('+7', '').replace(/\D/g, '')
      .match(/(\d{1,3})(\d{0,3})(\d{0,4})/)
    let str

    if (phoneValue !== null) {
      if (phoneValue[2] === undefined || phoneValue[2] === '') {
        str = `+7(${phoneValue[1] ?? ''}`
      } else {
        str = `+7(${phoneValue[1] ?? ''})-${phoneValue[2]}`
        if (phoneValue[3] !== undefined && phoneValue[3] !== '') str += `-${phoneValue[3] ?? ''}`
      }
      // num = phoneValue.input !== undefined ? +phoneValue.input : null
    }

    return str ?? ''
  }

  const onFormSubmit = (data: any): void => console.log(data)

  return (
    <ModalBase
      isOpen={ isOpen }
      onClose={ onClose }
    >
      <form className={ classNames(styles['form']) }
        onSubmit={ handleSubmit(onFormSubmit) }
      >
        <p className={ classNames(styles['title']) }>
          {width >= 479
            ? (
                'Оставьте заявку, и мы начнём поиск уже сегодня'
              )
            : (
                'Найти квартиру быстрее?'
              )}
        </p>
        {width < 479 && (
          <p className={ styles['subtitle'] }>
            Закажите Персональный поиск от Ренто
          </p>
        )}
        <Controller
          control={ control }
          name='use-telegram'
          render={ ({
            field: { onChange, name }
          }) => (
            <SwitchBase
              containerClass={ styles['switch'] ?? '' }
              labelText="Использовать для связи Telegram"
              name={ name }
              onChange={ onChange }
            />
          ) }
        />

        {!switchState
          ? (
            <>
              <label
                className={ classNames(styles['label']) }
                htmlFor='number'
              >
                Телефон для связи*
              </label>
              <input
                required
                autoComplete="off"
                className={ classNames(styles['input']) }
                id='number'
                maxLength={ 16 }
                placeholder="+7 (___)-___-____"
                type="tel"
                value={ phoneInput }
                { ...register('number', { required: true, onChange: e => handleInputChange(e) }) }
              />
            </>
            )
          : (
            <>
              <label
                className={ classNames(styles['label']) }
                htmlFor='telegram'
              >
                Никнейм в Telegram*
              </label>
              <input
                required
                autoComplete="off"
                className={ classNames(styles['input']) }
                id='telegram'
                placeholder="@nickname"
                { ...register('telegram', { required: true }) }
              />
            </>
            )}

        <Controller control={ control }
          name="agreement-checkbox"
          render={ ({
            field: { onChange, name }
          }) => (
            <Checkbox
              conatinerClass={ styles['checkbox'] ?? '' }
              id={ name }
              label="Я согласен на Обработку персональных данных"
              onChange={ onChange }
            />
          ) }
          rules={ { required: true } }
        />

        <ButtonGeneral
          round
          disabled={ !isValid }
          font='l'
          height={ width <= 479 ? '44' : '48' }
          type='submit'
        >
          Отправить заявку
        </ButtonGeneral>
      </form>
    </ModalBase>
  )
}

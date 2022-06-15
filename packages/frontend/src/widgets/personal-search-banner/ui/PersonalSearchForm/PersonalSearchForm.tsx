import { ButtonGeneral, Checkbox, ModalBase, SwitchBase } from '@shared/ui'
import classNames from 'classnames'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'

import styles from './PersonalSearchForm.module.scss'

interface IPersonalSearchForm {
  isOpen: boolean
  onClose: () => void
}

export function PersonalSearchForm ({ isOpen, onClose }: IPersonalSearchForm): JSX.Element {
  const [phoneInput, setPhoneInput] = useState('') // значение в инпуте
  const [phoneNumber, setPhoneNumber] = useState<null | number>(null) // номер для отправки на бэк
  const [telegramInput, setTelegramInput] = useState('')
  const [switchState, setSwitchState] = useState(false)
  const [checkboxState, setCheckboxState] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const { width } = useWindowSize()

  function handleInputChange (e: ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value
    const inputName = e.target.name
    if (inputName === 'number-input') {
      // чистим строку от всего лишнего
      const { phoneNumber, phoneString } = maskPhoneNumber(value)

      setPhoneNumber(phoneNumber)
      setPhoneInput(phoneString)
    } else if (inputName === 'telegram-input') {
      setTelegramInput(value)
    }
  }

  // // маскирование номера (шоб красиво было)
  function maskPhoneNumber (number: string): {phoneNumber: number | null, phoneString: string} {
    const phoneValue = number
      .replace('+7', '').replace(/\D/g, '')
      .match(/(\d{1,3})(\d{0,3})(\d{0,4})/)
    let str, num

    if (phoneValue !== null) {
      if (phoneValue[2] === undefined || phoneValue[2] === '') {
        str = `+7(${phoneValue[1] ?? ''}`
      } else {
        str = `+7(${phoneValue[1] ?? ''})-${phoneValue[2]}`
        if (phoneValue[3] !== undefined && phoneValue[3] !== '') str += `-${phoneValue[3] ?? ''}`
      }

      num = phoneValue.input !== undefined ? +phoneValue.input : null
    }

    return {
      phoneNumber: num ?? null,
      phoneString: str ?? ''
    }
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    if (checkboxState) {
      const body = {
        phone: phoneNumber,
        telegram: telegramInput
      }

      console.log(body)
    }
  }

  function checkValidity (): void {
    if (switchState) {
      setIsFormValid(checkboxState && telegramInput.length > 3)
    } else {
      setIsFormValid(checkboxState && phoneNumber?.toString().length === 10)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => checkValidity(), [phoneInput, telegramInput, checkboxState, switchState])

  return (
    <ModalBase
      isOpen={ isOpen }
      onClose={ onClose }
    >
      <form className={ classNames(styles['form']) }
        onSubmit={ handleSubmit }
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
          <p className={ styles.subtitle }>
            Закажите Персональный поиск от Ренто
          </p>
        )}
        <SwitchBase
          containerClass={ styles.switch }
          labelText="Использовать для связи Telegram"
          name='personal-search-switch'
          onChange={ e => setSwitchState(e.target.checked) }
        />

        {!switchState
          ? (
            <>
              <label
                className={ classNames(styles['label']) }
                htmlFor='number-input'
              >
                Телефон для связи*
              </label>
              <input
                required
                autoComplete="off"
                className={ classNames(styles['input']) }
                id='number-input'
                maxLength={ 16 }
                name='number-input'
                placeholder="+7 (___)-___-____"
                type="tel"
                value={ phoneInput }
                onChange={ handleInputChange }
              />
            </>
            )
          : (
            <>
              <label
                className={ classNames(styles['label']) }
                htmlFor='telegram-input'
              >
                Никнейм в Telegram*
              </label>
              <input
                required
                autoComplete="off"
                className={ classNames(styles['input']) }
                id='telegram-input'
                name='telegram-input'
                placeholder="@nickname"
                value={ telegramInput }
                onChange={ handleInputChange }
              />
            </>
            )}

        <Checkbox
          conatinerClass={ styles['checkbox'] }
          id="agreement-checkbox"
          label="Я согласен на Обработку персональных данных"
          onChange={ e => setCheckboxState(e.target.checked) }
        />

        <ButtonGeneral
          round
          disabled={ !isFormValid }
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

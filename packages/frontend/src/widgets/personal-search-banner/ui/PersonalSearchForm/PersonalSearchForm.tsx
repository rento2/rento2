import { ButtonGeneral, ButtonIcon, IconClose, ModalBase, SwitchBase } from '@shared/ui'
import classNames from 'classnames'
import { ChangeEvent, useState } from 'react'

import styles from './PersonalSearchForm.module.scss'

interface IPersonalSearchForm {
  isShown: boolean
  onClose: () => void
}

export function PersonalSearchForm ({ isShown, onClose }: IPersonalSearchForm): JSX.Element {
  const [phoneInput, setPhoneInput] = useState('')

  function handleInputChange (e: ChangeEvent<HTMLInputElement>): void {
    const cardValue = e.target.value
      .replace('+7', '').replace(/\D/g, '')
      .match(/(\d{1,3})(\d{0,3})(\d{0,4})/)

    let value

    // маскирование номера (шоб красиво было)
    // if (cardValue !== null) {
    //   if (cardValue[2] !== undefined && cardValue[3] !== undefined && cardValue[4] !== undefined) {
    //     value = `+7(${cardValue[1] ?? ''})-${cardValue[2]}-${cardValue[3]}-${cardValue[4]}`
    //   } else if (cardValue[2] !== undefined && cardValue[3] !== undefined && cardValue[4] === undefined) {
    //     value = `+7(${cardValue[1] ?? ''})-${cardValue[2]}-${cardValue[3]}`
    //   } else if (cardValue[2] !== undefined && cardValue[3] === undefined) {
    //     value = `+7(${cardValue[1] ?? ''})-${cardValue[2]}`
    //   } else {
    //     value = `+7(${cardValue[1] ?? ''}`
    //   }
    // }

    if (cardValue !== null) {
      value = `+7(${cardValue[1] ?? ''})-${cardValue[2] ?? '___'}-${cardValue[3] ?? '___'}-${cardValue[4] ?? '____'}`
    }

    setPhoneInput(value ?? '')
  }

  function handleSubmit (e: SubmitEvent): void {
    e.preventDefault()
  }

  const modalHeaderContent = (
    <div className={ classNames(styles['header']) }>
      <ButtonIcon
        background='none'
        full='stroke'
        size='32'
        onClick={ onClose }
      >
        <IconClose figure='square' />
      </ButtonIcon>
    </div>
  )

  const formContent = (
    <form className={ classNames(styles['form']) }>
      <p className={ classNames(styles['title']) }>
        Оставьте заявку, и мы начнём поиск уже сегодня
      </p>
      {/* где-то тут тоггл */}
      <SwitchBase name='personal-search-switch' />
      <label
        className={ classNames(styles['phone-label']) }
        htmlFor='input-number'
      >
        Телефон для связи*
      </label>
      <input
        required
        autoComplete="off"
        className={ classNames(styles['phone-input']) }
        id='input-number'
        name='input-number'
        placeholder="+7 (___) ___-____"
        type="tel"
        value={ phoneInput }
        onChange={ handleInputChange }
      />

      <input id='checkbox-agreement'
        name='checkbox-agreement'
        type="checkbox"
      />
      <label htmlFor='checkbox-agreement'>
        Я согласен на Обработку персональных данных
      </label>

      <ButtonGeneral
        round
        font='l'
        height='48'
        type='submit'
        onClick={ handleSubmit }
      >
        Отправить заявку
      </ButtonGeneral>
    </form>
  )

  return (
    <ModalBase
      bodyContent={ formContent }
      classes={ {
        content: classNames(styles['content']),
        body: classNames(styles['body']),
        dialog: classNames(styles['dialog']),
        header: classNames(styles['header'])
      } }
      headerContent={ modalHeaderContent }
      hide={ onClose }
      isShown={ isShown }
      labelledbyText='PersonalSearchForm'
    />
  )
}

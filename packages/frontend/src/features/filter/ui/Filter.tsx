import { FC } from 'react'
import classNames from 'classnames'
import { Controller, useForm } from 'react-hook-form'

import { ButtonGeneral, IconLocation, IconSetting4, Select, ChipBox, DoubleInput } from '@shared/ui'
import { options, chips } from '../model/mock'

import styles from './Filter.module.scss'

const defaultValues = {
  types: [],
  priceRange: { min: '', max: '' },
  sorting: options[1]
}

export const Filter: FC = () => {
  const { control, handleSubmit, watch, reset } = useForm({ defaultValues })

  console.log(watch())

  return (
    <div className={ styles.filter }>
      <form onSubmit={ handleSubmit(console.log) }>
        <section className={ styles.filter__section }>
          <Controller
            control={ control }
            name="priceRange"
            render={ ({ field: { value, onChange } }) =>
              (<DoubleInput
                value={ value }
                onChange={ onChange }
              />) }
          />
          <Controller
            control={ control }
            name="types"
            render={ ({ field: { value, onChange } }) =>
              (<ChipBox
                chips={ chips }
                value={ value }
                onChange={ onChange }
              />) }
          />
          <ButtonGeneral
            classProps={ classNames(styles['filter__button-map']) }
            font='s'
            grade='neutral'
            height='40'
          >
            <span>
              На карте
            </span>
            <IconLocation />
          </ButtonGeneral>
        </section>
        <section className={ styles.filter__section }>
          <div className={ styles.filter__other }>
            <Controller
              control={ control }
              name="sorting"
              render={ ({ field: { value, onChange } }) =>
                (<Select
                  isSearchable={ false }
                  options={ options }
                  value={ value }
                  onChange={ onChange }
                />) }
            />
            <ButtonGeneral
              classProps={ classNames(styles['filter__button-filters']) }
              font='s'
              full="text"
              grade="neutral"
              height='40'
            >
              <span>
                Фильтры
              </span>
              <IconSetting4 />
            </ButtonGeneral>
            <ButtonGeneral
              classProps={ classNames(styles['filter__button-reset']) }
              font='s'
              full="text"
              grade="neutral"
              height='40'
              onClick={ () => reset(defaultValues) }
            >
              Сбросить
            </ButtonGeneral>
          </div>
          <ButtonGeneral
            round
            classProps={ classNames(styles['filter__button-search']) }
            font="s"
            height='40'
            type='button'
          >
            Показать 88888 квартир
          </ButtonGeneral>
        </section>
      </form>
    </div>
  )
}

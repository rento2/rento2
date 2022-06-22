import { FC } from 'react'
import classNames from 'classnames'
import { Controller, Control, SubmitHandler } from 'react-hook-form'

import { ButtonGeneral, ChipBox, DoubleInput, IconArrowRight, IconBus, IconMetro, IconWalker, ModalBase, RadioButton } from '@shared/ui'
import { chips } from '@features/filter/model/mock'

import styles from './DetailFilter.module.scss'

interface IDetailFilter {
  isOpen: boolean
  onClose: () => void
  // TODO: После типизации defaultValue, заменить any
  control: Control<any>
  onSubmit: SubmitHandler<any>
  onReset: () => void
}

export const DetailFilеr: FC<IDetailFilter> = ({ isOpen, onClose, control, onReset, onSubmit }) => (
  <ModalBase
    footer={
      <div className={ styles.footer }>
        <ButtonGeneral
          classProps={ classNames(styles['footer__button-reset']) }
          font='s'
          full="text"
          grade="primary"
          height='40'
          onClick={ onReset }
        >
          Очистить фильтры
        </ButtonGeneral>
        <ButtonGeneral
          classProps={ classNames(styles['footer__button-search']) }
          font="s"
          form="detailFilter"
          height='40'
          type='submit'
        >
          Показать 888888 квартир
        </ButtonGeneral>
      </div>
      }
    isOpen={ isOpen }
    translate="right"
    onClose={ onClose }
  >
    <form
      id="detailFilter"
      onSubmit={ onSubmit }
    >
      <div className={ styles['sub-header'] }>
        <Controller
          control={ control }
          name="priceRange"
          render={ ({ field: { value, onChange } }) =>
            (<DoubleInput
              placeholder={ { min: '50000', max: '2000000' } }
              unit="₽"
              value={ value }
              onChange={ onChange }
            />) }
        />
      </div>
      <div className={ styles.container }>
        <Controller
          control={ control }
          name="mayWidth"
          render={ ({ field: { value, onChange } }) =>
            (<ChipBox
              isSwipeable
              chips={ chips.mayWidth }
              marginRight={ 10 }
              value={ value }
              onChange={ onChange }
            />) }
        />
        <div className={ styles.separator } />

        <h2 className={ styles.subtitle }>
          Параметры квартиры
        </h2>
        <div className={ styles.options }>
          <Controller
            control={ control }
            name="square"
            render={ ({ field: { value, onChange } }) =>
              (<DoubleInput
                classProps={ classNames(styles.options__double) }
                placeholder={ { min: '888', max: '888' } }
                unit="м2"
                value={ value }
                onChange={ onChange }
              />) }
          />
          <Controller
            control={ control }
            name="types"
            render={ ({ field: { value, onChange } }) =>
              (<ChipBox
                chips={ chips.options }
                classProps={ classNames(styles['options__chip-box']) }
                value={ value }
                onChange={ onChange }
              />) }
          />
        </div>

        <button className={ styles['button-metro'] }>
          <IconMetro classProps={ styles['button-metro__icon'] } />
          Станция метро
          <IconArrowRight classProps={ styles['button-metro__arrow'] } />
        </button>
        <div className={ styles.separator } />

        <h2 className={ styles.subtitle }>
          Время до метро
        </h2>
        <div className={ classNames(styles.time, 'flex-center') }>
          <div className={ classNames('flex-center') }>
            <Controller
              control={ control }
              name="radio"
              render={ ({ field }) => (
                <RadioButton
                  { ...field }
                  checked={ field.value === 'walker' }
                  classProps={ classNames(styles.time__radio) }
                  icon={ <IconWalker /> }
                  value='walker'
                />
              ) }
            />
            <Controller
              control={ control }
              name="radio"
              render={ ({ field }) => (
                <RadioButton
                  { ...field }
                  checked={ field.value === 'bus' }
                  classProps={ classNames(styles.time__radio) }
                  icon={ <IconBus /> }
                  value='bus'
                />
              ) }
            />
          </div>
          <Controller
            control={ control }
            name="time"
            render={ ({ field: { value, onChange } }) =>
              (<ChipBox
                isSwipeable
                chips={ chips.time }
                classProps={ classNames(styles['time__chip-box']) }
                marginRight={ 10 }
                value={ value }
                onChange={ onChange }
              />) }
          />
        </div>
        <div className={ styles.devider } />

        <h2 className={ styles.subtitle }>
          Дом
        </h2>
        <Controller
          control={ control }
          name="house"
          render={ ({ field: { value, onChange } }) =>
            (<ChipBox
              isSwipeable
              chips={ chips.house }
              marginRight={ 10 }
              value={ value }
              onChange={ onChange }
            />) }
        />
        <div className={ styles.separator } />

        <h2 className={ styles.subtitle }>
          Этаж
        </h2>
        <div className={ classNames(styles.floor) }>
          <Controller
            control={ control }
            name="floorRange"
            render={ ({ field: { value, onChange } }) =>
              (<DoubleInput
                classProps={ classNames(styles.floor__double) }
                placeholder={ { min: '88', max: '88' } }
                value={ value }
                onChange={ onChange }
              />) }
          />
          <Controller
            control={ control }
            name="floor"
            render={ ({ field: { value, onChange } }) =>
              (<ChipBox
                isSwipeable
                chips={ chips.floor }
                marginRight={ 4 }
                value={ value }
                onChange={ onChange }
              />) }
          />
        </div>
        <div className={ styles.separator } />

        <h2 className={ styles.subtitle }>
          Квартира
        </h2>
        <Controller
          control={ control }
          name="apartment"
          render={ ({ field: { value, onChange } }) =>
            (<ChipBox
              isSwipeable
              chips={ chips.apartment }
              marginRight={ 10 }
              value={ value }
              onChange={ onChange }
            />) }
        />
        <div className={ styles.separator } />

        <h2 className={ styles.subtitle }>
          Техника
        </h2>
        <Controller
          control={ control }
          name="technique"
          render={ ({ field: { value, onChange } }) =>
            (<ChipBox
              isSwipeable
              chips={ chips.techniqueFirst }
              classProps={ classNames(styles['technique__chip-box']) }
              marginRight={ 10 }
              value={ value }
              onChange={ onChange }
            />) }
        />
        <Controller
          control={ control }
          name="technique"
          render={ ({ field: { value, onChange } }) =>
            (<ChipBox
              isSwipeable
              chips={ chips.techniqueSecond }
              marginRight={ 10 }
              value={ value }
              onChange={ onChange }
            />) }
        />
      </div>
    </form>
  </ModalBase>
)

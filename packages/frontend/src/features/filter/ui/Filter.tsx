import { FC, useMemo, useState } from 'react'
import classNames from 'classnames'
import { Controller, useForm } from 'react-hook-form'

import { ButtonGeneral, IconLocation, IconSetting4, Select, ChipBox, DoubleInput } from '@shared/ui'
import { options, chips } from '../model/mock'
import { useSticky } from '../lib/hooks/useSticky'

import mainStyles from './MainFilter.module.scss'
import headerStyles from './HeaderFilter.module.scss'
import { DetailFilеr } from './modals/detail-filter/DetailFilter'

// TODO: Типизировать после того как станет понятно в каком формате нужны данные
const defaultValues: any = {
  types: [],
  mayWidth: [],
  priceRange: { min: '', max: '' },
  square: { min: '', max: '' },
  floorRange: { min: '', max: '' },
  floor: [],
  sortType: options[1],
  technique: [],
  time: [],
  apartment: [],
  house: [],
  radio: ''
}

export const Filter: FC = () => {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false)

  const { control, handleSubmit, reset } = useForm({ defaultValues })
  const { anchorRef, isHeaderMode, showHeader } = useSticky()

  const styles = useMemo(() => isHeaderMode ? headerStyles : mainStyles, [isHeaderMode])

  const onReset = (): void => {
    reset(defaultValues)
  }
  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <>
      <div className={ classNames(styles.filter, { [styles.sticky]: showHeader }) }>
        <form
          className={ classNames(styles.filter__container, { container: isHeaderMode }) }
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={ onSubmit }
        >
          <fieldset className={ styles.fieldset }>
            <Controller
              control={ control }
              name="priceRange"
              render={ ({ field: { value, onChange } }) =>
                (<DoubleInput
                  classProps={ classNames(styles.fieldset__item, styles.double) }
                  placeholder={ { min: '50000', max: '2000000' } }
                  unit="₽"
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
                  classProps={ classNames(styles.fieldset__item, styles['chip-box']) }
                  value={ value }
                  onChange={ onChange }
                />) }
            />
            {!isHeaderMode && (
              <ButtonGeneral
                classProps={ classNames(styles['button-map']) }
                font='s'
                grade='neutral'
                height='40'
              >
                <span className={ styles['button-map__text'] }>
                  На карте
                </span>
                <IconLocation classProps={ styles['button-map__icon'] } />
              </ButtonGeneral>
            )}
          </fieldset>
          <fieldset className={ styles.fieldset }>
            <div className={ styles.other }>
              <Controller
                control={ control }
                name="sortType"
                render={ ({ field: { value, onChange } }) =>
                  (<Select
                    className={ classNames(styles.select, styles.other__item) }
                    instanceId="select"
                    isSearchable={ false }
                    options={ options }
                    value={ value }
                    onChange={ onChange }
                  />) }
              />
              <ButtonGeneral
                classProps={ classNames(styles['button-filters'], styles.other__item) }
                font='s'
                full="text"
                grade="neutral"
                height='40'
                onClick={ () => setShowAdvancedOptions(!showAdvancedOptions) }
              >
                <span className={ styles['button-filters__text'] }>
                  Фильтры
                </span>
                <IconSetting4 classProps={ styles['button-filters__icon'] } />
              </ButtonGeneral>
              <ButtonGeneral
                classProps={ classNames(styles['button-reset'], styles.other__item) }
                font='s'
                full="text"
                grade="neutral"
                height='40'
                onClick={ onReset }
              >
                Сбросить
              </ButtonGeneral>
            </div>
            <ButtonGeneral
              round
              classProps={ classNames(styles['button-search']) }
              font="s"
              height='40'
              type='submit'
            >
              Показать 88888 квартир
            </ButtonGeneral>
            {isHeaderMode && (
              <ButtonGeneral
                classProps={ classNames(styles['button-map']) }
                font='s'
                grade='neutral'
                height='40'
              >
                <IconLocation />
              </ButtonGeneral>
            )}
          </fieldset>
        </form>
      </div>
      <div ref={ anchorRef } />

      <DetailFilеr
        control={ control }
        isOpen={ showAdvancedOptions }
        onClose={ () => setShowAdvancedOptions(false) }
        onReset={ onReset }
        onSubmit={ onSubmit }
      />
    </>
  )
}

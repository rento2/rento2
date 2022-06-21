import { FC, useMemo, useState } from 'react'
import classNames from 'classnames'
import { Controller, useForm } from 'react-hook-form'

import { ButtonGeneral, IconLocation, IconSetting4, Select, ChipBox, DoubleInput } from '@shared/ui'
import { options, chips } from '../model/mock'
import { useSticky } from '../lib/hooks/useSticky'

import mainStyles from './MainFilter.module.scss'
import headerStyles from './HeaderFilter.module.scss'
import { DetailFilеr } from './modals/detail-filter/DetailFilter'

const defaultValues = {
  types: [],
  priceRange: { min: '', max: '' },
  sortType: options[1]
}

export const Filter: FC = () => {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false)

  const { control, handleSubmit, reset } = useForm({ defaultValues })
  const { anchorRef, isHeaderMode, showHeader } = useSticky()

  const styles = useMemo(() => isHeaderMode ? headerStyles : mainStyles, [isHeaderMode])

  return (
    <>
      <div
        className={ classNames(styles.filter, { [styles.sticky]: showHeader }) }
        onSubmit={ handleSubmit(console.log) }
      >
        <form className={ classNames(styles.filter__container, { container: isHeaderMode }) }>
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
                  chips={ chips }
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
                onClick={ () => reset(defaultValues) }
              >
                Сбросить
              </ButtonGeneral>
            </div>
            <ButtonGeneral
              round
              classProps={ classNames(styles['button-search']) }
              font="s"
              height='40'
              type='button'
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
        isOpen={ showAdvancedOptions }
        onClose={ () => setShowAdvancedOptions(false) }
      />
    </>
  )
}

import { FC, useMemo, useState } from 'react'
import classNames from 'classnames'
import { Controller, useForm } from 'react-hook-form'

import { ButtonGeneral, IconLocation, IconSetting4, Select, ChipBox, DoubleInput, NewModal } from '@shared/ui'
import { options, chips } from '../model/mock'
import { useSticky } from '../lib/hooks/useSticky'

import mainStyles from './MainFilter.module.scss'
import headerStyles from './HeaderFilter.module.scss'

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
                  classProps={ styles.fieldset__item }
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
                  classProps={ styles.fieldset__item }
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
      <NewModal
        isSwipe
        isOpen={ showAdvancedOptions }
        title="Headlien Text"
        translate="bottom"
        onClose={ () => setShowAdvancedOptions(false) }
      >
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum laudantium nobis hic voluptates. Nobis corporis ipsa pariatur laborum ut quae, impedit cum error. Porro accusamus dignissimos nulla nesciunt, et explicabo ab pariatur reiciendis maxime reprehenderit architecto nisi, tempora, dolorum ipsa voluptatibus quibusdam aspernatur expedita! Assumenda ab quis repellendus asperiores at omnis explicabo suscipit facilis, quam fugit facere natus est nobis doloremque libero ea porro, tempora mollitia necessitatibus, animi neque quo impedit! Itaque doloribus a repudiandae iste. Impedit adipisci molestiae nobis magnam praesentium, veniam rem aspernatur aut. Obcaecati, minima? Libero, officiis tempore itaque pariatur dolorem fugiat nostrum ad, quos officia non temporibus quo, accusamus velit? Est explicabo rerum incidunt ullam, iusto quisquam
        </div>
      </NewModal>
    </>
  )
}

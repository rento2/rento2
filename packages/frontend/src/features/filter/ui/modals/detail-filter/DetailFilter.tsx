import { FC } from 'react'
import classNames from 'classnames'

import { ButtonGeneral, ChipBox, DoubleInput, IconArrowRight, IconBus, IconMetro, IconWalker, ModalBase } from '@shared/ui'

import styles from './DetailFilter.module.scss'

interface IDetailFilter {
  isOpen: boolean
  onClose: () => void
}

export const DetailFilеr: FC<IDetailFilter> = ({ isOpen, onClose }) => {
  return (
    <ModalBase
      footer={
        <div className={ styles.footer }>
          <ButtonGeneral
            classProps={ classNames(styles['footer__button-reset']) }
            font='s'
            full="text"
            grade="primary"
            height='40'
          >
            Очистить фильтры
          </ButtonGeneral>
          <ButtonGeneral
            classProps={ classNames(styles['footer__button-search']) }
            font="s"
            height='40'
            type='button'
          >
            Показать 888888 квартир
          </ButtonGeneral>
        </div>
      }
      isOpen={ isOpen }
      translate="right"
      onClose={ onClose }
    >
      <div className={ styles['sub-header'] }>
        <DoubleInput
          placeholder={ { min: '50000', max: '2000000' } }
          unit="₽"
          value={ { min: '', max: '' } }
          onChange={ () => {} }
        />
      </div>
      <div className={ styles.container }>
        <ChipBox
          isSwipeable
          chips={ ['Можно с детьми', 'Можно с животными'] }
          marginRight={ 10 }
          value={ [] }
          onChange={ () => {} }
        />
        <div className={ styles.separator } />

        <h2 className={ styles.subtitle }>
          Параметры квартиры
        </h2>
        <div className={ styles.options }>
          <DoubleInput
            classProps={ classNames(styles.options__double) }
            placeholder={ { min: '888', max: '888' } }
            unit="м2"
            value={ { min: '', max: '' } }
            onChange={ () => {} }
          />
          <ChipBox
            chips={ ['Студия', '1к', '2к', '3к+'] }
            classProps={ classNames(styles['options__chip-box']) }
            value={ [] }
            onChange={ () => {} }
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
          <div className="flex-center">
            <span className={ classNames(styles['time__icon-walker'], 'flex-center') }>
              <IconWalker />
            </span>
            <span className={ classNames(styles['time__icon-walker'], 'flex-center') }>
              <IconBus />
            </span>
          </div>
          <ChipBox
            isSwipeable
            chips={ ['5 мин.', '10 мин.', '15 мин.', '20+ мин.'] }
            classProps={ classNames(styles['time__chip-box']) }
            marginRight={ 10 }
            value={ [] }
            onChange={ () => {} }
          />
        </div>
        <div className={ styles.devider } />

        <h2 className={ styles.subtitle }>
          Дом
        </h2>
        <ChipBox
          isSwipeable
          chips={ ['Любой', 'Сталинки', 'Новостройки', 'В центре'] }
          marginRight={ 10 }
          value={ [] }
          onChange={ () => {} }
        />
        <div className={ styles.separator } />

        <h2 className={ styles.subtitle }>
          Этаж
        </h2>
        <div className={ classNames(styles.floor) }>
          <DoubleInput
            classProps={ classNames(styles.floor__double) }
            placeholder={ { min: '88', max: '88' } }
            value={ { min: '', max: '' } }
            onChange={ () => {} }
          />
          <ChipBox
            isSwipeable
            chips={ ['Не первый', 'Не последний', 'Последний'] }
            marginRight={ 4 }
            value={ [] }
            onChange={ () => {} }
          />
        </div>
        <div className={ styles.separator } />

        <h2 className={ styles.subtitle }>
          Квартира
        </h2>
        <ChipBox
          isSwipeable
          chips={ ['С мебелью', 'Без мебели', 'Хороший ремонт', 'Балкон / лоджия'] }
          marginRight={ 10 }
          value={ [] }
          onChange={ () => {} }
        />
        <div className={ styles.separator } />

        <h2 className={ styles.subtitle }>
          Техника
        </h2>
        <ChipBox
          isSwipeable
          chips={ ['Холодильник', 'Телевизор', 'Стиральная машинка'] }
          classProps={ classNames(styles['technique__chip-box']) }
          marginRight={ 10 }
          value={ [] }
          onChange={ () => {} }
        />
        <ChipBox
          isSwipeable
          chips={ ['Посудомоечная машинка', 'Кондиционер'] }
          marginRight={ 10 }
          value={ [] }
          onChange={ () => {} }
        />
      </div>
    </ModalBase>
  )
}

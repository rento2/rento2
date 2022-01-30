import styles from './AgreementShortModalBody.module.scss'
import classNames from 'classnames'

export const AgreementShortModalBody = (): JSX.Element => {
  const modalData = [
    ['Подушка', '1000'],
    ['Одеяло', '3000'],
    ['Матрац', '3000'],
    ['Простынь', '1500'],
    ['Наволочка', '1000'],
    ['Пододеяльник', '2000'],
    ['Покрывало', 'Сумма залога'],
    ['Полотенце малое', '1000'],
    ['Полотенце большое', '2000'],
    ['Штора', 'Сумма залога'],
    ['Тюль', '1500'],
    ['Стакан', '300'],
    ['Чашка', '300'],
    ['Тарелка', '500'],
    ['Зеркало', 'Сумма залога'],
    ['Мебель', 'Рыночная стоимость'],
    ['Утюг', 'Сумма залога'],
    ['Фен', 'Сумма залога'],
    ['Сантехника', 'Сумма залога'],
    ['Чайник', 'Сумма залога']
  ]

  const listBody = modalData.map((item, index) => {
    return (
      <li
        key={ `item-${index}` }
        className={ classNames(
          styles['modal__item'],
          index % 2 === 0 ? styles['modal__item_color'] : ''
        ) }
      >
        <p className={ styles['modal__cell-inner'] }>
          {item[0]}
        </p>
        <p className={ styles['modal__cell-inner'] }>
          {item[1]}
        </p>
      </li>
    )
  })

  return (
    <ul className={ styles['modal__list'] }>
      <li className={ styles['modal__item-title'] }>
        <h3 className={ styles['modal__cell-inner'] }>
          Наименование
        </h3>
        <h3 className={ styles['modal__cell-inner'] }>
          Цена, руб
        </h3>
      </li>
      {listBody}
    </ul>
  )
}

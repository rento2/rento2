import styles from './Advantages.module.scss'

export default function Advantages (): JSX.Element {
  return (
    <section className={[ styles['advantages'], 'container'].join(' ')}>
    <h2 className={ [styles['advantages__heading'], 'flex-center'].join(' ')}>
        Для собственников квартир в Москве
    </h2>
    <p className={ [styles['advantages__text-main'], 'flex-center'].join(' ')}>
        Предлагаем лучшие решения на рынке аренды
    </p>
    <ul className={ styles['advantages__list']}>
        <li className={ styles['advantages__item-1']}>
            <h3 className={ styles['advantages__title']}>
                Мы профи
            </h3>
            <p className={ styles['advantages__text']}>
                Подготовим и&nbsp;сфотографируем вашу квартиру так, чтобы вы&nbsp;могли получить максимально возможный доход.
            </p>
        </li>
        <li className={ [styles['advantages__item-2'], 'flex-s-b'].join(' ')}>
            <div className={ styles['advantages__item-2-box']}>
                <h3 className={ styles['advantages__title']}>
                    Очень быстро
                </h3>
                <p className={ styles['advantages__text']}>
                    Средний срок сдачи 4&nbsp;дня.
                    От&nbsp;оставленной заявки до&nbsp;первых показов не&nbsp;более 2-х дней.
                </p>
            </div>
            <div className={ styles['advantages__item-2-inner']}>
                <picture>
                  <source media='(max-width: 699px)' srcSet='/images/owners/speed-photo-mob.png'/>
                  <source media='(max-width: 929px)' srcSet='/images/owners/speed-photo-tablet.png'/>
                  <img className={ styles['advantages__item-2-img1']} src="/images/owners/speed-photo.png" alt="Фото"/>
                </picture>
                <picture className={ styles['advantages__item-2-picture-2']}>
                  <img className={ styles['advantages__item-2-img2']} src="/images/owners/speed-arrow.svg" alt="ФОто" />
                </picture>
                <span className={ [styles['advantages__item-2-img3'], 'advantages__item-2-img3-anim'].join(' ')}></span>
            </div>
        </li>
        <li className={ [ styles['advantages__item-3'], 'flex-s-b'].join(' ')}>
            <div className={ styles['advantages__item-3-box']}>
                <h3 className={ styles['advantages__title']}>
                    Надежные жильцы
                </h3>
                <p className={ styles['advantages__text']}>
                Перед подписанием договора мы&nbsp;проверяем всех потенциальных арендаторов через системы цифровой идентификации.
                </p>
            </div>
            <div className={ styles['advantages__item-3-inner']}>
                <div className={ [styles['advantages__item-3-check'], 'advantages__item-3-check-anim', 'flex-center'].join(' ')}>
                  <svg  className={ styles['advantages__item-3-check-img']} viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11.5714L12.625 21L31 3" stroke="#9E9FF5" stroke-width="5" stroke-linecap="round"/>
                  </svg>
                </div>
            </div>
        </li>
        <li className={ styles['advantages__item-4']}>
            <h3 className={ styles['advantages__title']}>
                Все застраховано
            </h3>
            <p className={ styles['advantages__text']}>
               Защитим ваше жилье от&nbsp;любого вреда арендатора на&nbsp;сумму до&nbsp;3&nbsp;000&nbsp;000&nbsp;рублей.
            </p>
        </li>
        <li className={ styles['advantages__item-5']}>
            <h3 className={ styles['advantages__title']}>
                Никакой бытовой рутины
            </h3>
            <p className={ styles['advantages__text']}>
                У&nbsp;нас собственная клиннинговая служба и&nbsp;хоум-мастера, чтобы решить любую задачу.
            </p>
        </li>
    </ul>
  </section>
  )
}

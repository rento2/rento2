import { BreakpointsFooter } from '../BreakpointsFooter'
import { BreakpointsHeader } from '../BreakpointsHeader'
import { BreakpointsCard } from './BreakpointsCard'
import { BreakpointsFilter } from './BreakpointsFilter'
import styles from './Breakpoints.module.scss'
import stylesContainer from '../Container.module.scss'
import classNames from 'classnames'

export const Breakpoints = (): JSX.Element => {
  const dataCard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  return (
    <div className='wrapper'>
      <div>
        <BreakpointsHeader />
        <BreakpointsFilter />
        <main className={ styles['main'] }>
          <div className={ classNames(styles['bread-crumbs'], stylesContainer['container']) }>
            <svg fill="none"
              height="16"
              viewBox="0 0 9 16"
              width="9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.66667 14.6663L1 7.99967L7.66667 1.33301"
                stroke="#A9ACB4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            {' '}
            Главная / Аренда от 11 месяцев
          </div>
          <div className={ classNames(styles['catalog'], stylesContainer['container']) }>
            {dataCard.map((item) => <BreakpointsCard key={ item } />)}
            <div className={ classNames(styles['catalog__baner'], stylesContainer['container'], 'flex-center') }>
              Баннер с услугой
            </div>
            <div className={ classNames(styles['catalog__proposal'], stylesContainer['container'], 'flex-center') }>
              квартиры Rento
            </div>
          </div>
          <div className={ classNames(styles['button__wrapper'], stylesContainer['container']) }>
            <button className={ styles['button'] }
              type='button'
            >
              Показать больше
            </button>
          </div>
        </main>
      </div>
      <BreakpointsFooter />
    </div>
  )
}

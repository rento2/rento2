import { BreakpointsFooter } from '../BreakpointsFooter'
import { BreakpointsHeader } from '../BreakpointsHeader'
import { BreakpointsCard } from './BreakpointsCard'
import styles from './Breakpoints.module.scss'
import stylesContainer from '../Container.module.scss'
import classNames from 'classnames'

export const Breakpoints = (): JSX.Element => {
  const dataCard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  return (
    <div className='wrapper'>
      <div>
        <BreakpointsHeader />
        <main className={ styles['main'] }>
          <div className={ classNames(styles['catalog'], stylesContainer['container']) }>
            {dataCard.map((item) => <BreakpointsCard key={ item } />)}
            <div className={ classNames(styles['catalog__baner'], stylesContainer['container'], 'flex-center') }>
              Баннер с услугой
            </div>
          </div>
        </main>
      </div>
      <BreakpointsFooter />
    </div>
  )
}

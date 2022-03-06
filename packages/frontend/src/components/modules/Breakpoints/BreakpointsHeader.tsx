import styles from './BreakpointsHeader.module.scss'
import stylesContainer from './Container.module.scss'
import classNames from 'classnames'

export const BreakpointsHeader = (): JSX.Element => {
  return (
    <header className={ styles['header'] }>
      <div className={ classNames(styles['header__inner'], stylesContainer['container'], 'flex-s-b-c') }>
        <div>
          Logo
        </div>
        <nav className={ styles['nav'] }>
          <ul className={ classNames(styles['nav__list'], 'flex-s-b') }>
            <li>
              Длительная аренда
            </li>
            <li>
              Краткосрочная аренда
            </li>
            <li>
              Собственникам
            </li>
          </ul>
        </nav>
        <a href="tel:+78000000000">
          +8 800 000 0000
        </a>
      </div>
    </header>
  )
}

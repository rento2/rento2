import styles from './BreakpointsFooter.module.scss'
import stylesContainer from './Container.module.scss'
import classNames from 'classnames'

export const BreakpointsFooter = (): JSX.Element => {
  return (
    <footer className={ styles['footer'] }>
      <div className={ classNames(stylesContainer['container'], 'flex-center') }>
        Footer
      </div>
    </footer>
  )
}

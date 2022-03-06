import styles from './BreakpointsCard.module.scss'
import classNames from 'classnames'

export const BreakpointsCard = (): JSX.Element => {
  return (
    <div className={ styles['card'] }>
      <div className={ classNames(styles['card__image'], 'flex-center') }>
        Image
      </div>
      <p className={ styles['card__text'] }>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem quod quidem non odio unde maxime labore corrupti ex consequuntur.
      </p>
    </div>

  )
}

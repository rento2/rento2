import styles from './Preloader.module.scss'
export function Preloader (): JSX.Element {
  return (
    <div className={ styles.preloader }>
      <div className={ styles.preloader__iner } />
      <div className={ styles.preloader__img } />
    </div>
  )
}

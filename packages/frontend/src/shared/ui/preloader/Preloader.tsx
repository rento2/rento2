import styles from './Preloader.module.scss'
export function Preloader (): JSX.Element {
  return (
    <div className={ styles['wrapper'] }>
      <div className={ styles['preloader'] } />
      <div className={ styles['preloader-r'] } />
    </div>
  )
}

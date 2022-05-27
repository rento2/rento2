import classNames from 'classnames'
import styles from './GallerySliderIndicator.module.scss'

interface IGalleryIndicator {
  current: number
  total: number
}

export function GallerySliderIndicator ({ current, total }: IGalleryIndicator): JSX.Element {
  return (
    <div className={ classNames(styles['container']) }>
      <p className={ classNames(styles['text']) }>
        {current}
        {' '}
        /
        {' '}
        {total}
      </p>
    </div>
  )
}

import { ModalSwipe } from '@shared/ui'
import classNames from 'classnames'
import { ModalPriceBody } from './body/ModalPriceBody'
import { ModalPriceHeader } from './header/ModalPriceHeader'
import styles from './DocsShortModalPrice.module.scss'

export const DocsShortModalPrice = ({ isShownProps, hideProps }: {isShownProps: boolean, hideProps: () => void}): JSX.Element => {
  return (
    <ModalSwipe
      bodyContent={ <ModalPriceBody /> }
      classes={ {
        dialog: classNames(styles['modal__dialog']),
        body: classNames(styles['modal__body']),
        header: classNames(styles['modal__header'])
      } }
      hide={ hideProps }
      isShown={ isShownProps }
      labelledbyText='Modal parent'
      modalHeaderProps={ <ModalPriceHeader handleHide={ hideProps } /> }
    />
  )
}

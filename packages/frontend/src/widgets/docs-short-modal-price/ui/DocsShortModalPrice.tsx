import { DrawerBase } from '@shared/ui'
import classNames from 'classnames'
import { ModalPriceBody } from './body/ModalPriceBody'
import { ModalPriceHeader } from './header/ModalPriceHeader'
import { useWindowDimensions } from '@shared/lib'
import { ModalBase } from '@shared/ui/modals/modal-base/ModalBase'
import styles from './DocsShortModalPrice.module.scss'

export const DocsShortModalPrice = ({ isShownProps, hideProps }: {isShownProps: boolean, hideProps: () => void}): JSX.Element => {
  const { widthWindow } = useWindowDimensions()
  return (
    widthWindow > 849
      ? (
        <ModalBase
          bodyContent={ <ModalPriceBody /> }
          classes={ {
            dialog: classNames(styles['modal__dialog']),
            body: classNames(styles['modal__body']),
            header: classNames(styles['modal__header']),
            content: classNames(styles['modal__content']),
            positionContent: classNames(styles['modal__position-content'])
          } }
          headerContent={ <ModalPriceHeader handleHide={ hideProps } /> }
          hide={ hideProps }
          isShown={ isShownProps }
          labelledbyText='Modal parent'
        />
        )
      : (
        <DrawerBase
          bodyContent={ <ModalPriceBody /> }
          classes={ {
            dialog: classNames(styles['modal__dialog']),
            body: classNames(styles['modal__body']),
            header: classNames(styles['modal__header']),
            content: classNames(styles['modal__content'])
          } }
          hide={ hideProps }
          isShown={ isShownProps }
          labelledbyText='Drawer'
        />
        )
  )
}

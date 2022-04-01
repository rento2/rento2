import { FC, useState } from 'react'
import { useModalCloseSwipe } from '@shared/ui/modals/hooks/useModalCloseSwipe'
import { ModalBase } from '@shared/ui/modals/modal-base/ModalBase'
import { ModalSwipeHeader } from './ModalSwipeHeader'
import { IModal } from '@shared/ui/modals/types/IModal'
import styles from './ModalSwipe.module.scss'

interface ModalSwipeProps extends IModal {
  modalHeaderProps: JSX.Element
}

export const ModalSwipe: FC<ModalSwipeProps> = ({
  classes = {},
  modalHeaderProps,
  bodyContent,
  isShown,
  labelledbyText,
  hide
}) => {
  const [heightModal, setHeightModal] = useState<number>(0)
  const [handlers, styleMove] = useModalCloseSwipe(hide, heightModal)

  const getHeightModal = (height: number): void => {
    setHeightModal(height)
  }

  return (
    <ModalBase
      bodyContent={ bodyContent }
      classes={ {
        modal: styles['modal'] ?? '',
        position: styles['modal__position'] ?? '',
        dialog: styles['modal__dialog'] ?? '',
        ...classes
      } }
      handleHeight={ getHeightModal }
      headerContent={
        <ModalSwipeHeader
          classHeader={ classes?.header ?? '' }
          handlersProps={ handlers ?? {} }
          modalHeaderProps={ modalHeaderProps }
        />
      }
      hide={ hide }
      isShown={ isShown }
      labelledbyText={ labelledbyText }
      style={ styleMove ?? {} }
    />
  )
}

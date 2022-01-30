import { FC, useState } from 'react'
import { useModalCloseSwipe } from '../hooks/useModalCloseSwipe'
import { ModalBase } from '../ModalBase/ModalBase'
import { ModalSwipeHeader } from './ModalSwipeHeader'
import styles from './ModalSwipe.module.scss'
import { IModal } from '../types/IModal'

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

import { FC, useState } from 'react'
import { useModalCloseSwipe } from '../hooks/useModalCloseSwipe'
import { ModalBase } from '../ModalBase/ModalBase'
import { ModalSwipeHeader } from './ModalSwipeHeader'
import style from './ModalSwipe.module.scss'

interface ModalSwipeProps {
  modalHeaderProps: JSX.Element
  modalBodyProps: JSX.Element
  isShownProps: boolean
  labelledbyTextProps: string
  handleHide: () => void
  classes?: {
    modal?: string
    dialog?: string
    body?: string
    backdrop?: string
    header?: string
    position?: string
    positionDialog?: string
  }
}

export const ModalSwipe: FC<ModalSwipeProps> = ({
  classes = {},
  modalHeaderProps,
  modalBodyProps,
  isShownProps,
  labelledbyTextProps,
  handleHide
}) => {
  const [heightModal, setHeightModal] = useState<number>(0)
  const [handlers, styleMove] = useModalCloseSwipe(handleHide, heightModal)

  const getHeightModal = (height: number): void => {
    setHeightModal(height)
  }

  return (
    <ModalBase
      isShown={isShownProps}
      handleHeight={getHeightModal}
      hide={handleHide}
      headerContent={
        <ModalSwipeHeader
          handlersProps={handlers ?? {}}
          modalHeaderProps={modalHeaderProps}
          classHeader={classes?.header ?? ''}
        />
      }
      bodyContent={modalBodyProps}
      labelledbyText={labelledbyTextProps}
      style={styleMove ?? {}}
      classes={{
        modal: style['modal'] ?? '',
        position: style['modal__position'] ?? '',
        dialog: style['modal__dialog'] ?? '',
        ...classes
      }}
    />
  )
}

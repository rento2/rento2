import classNames from 'classnames'
import { FC } from 'react'
import { SwipeableHandlers } from 'react-swipeable'
import styles from './ModalSwipeHeader.module.scss'

interface IModalHeader {
  handlersProps: SwipeableHandlers | {}
  modalHeaderProps: JSX.Element
  classHeader?: string
}

export const ModalSwipeHeader: FC<IModalHeader> = ({
  handlersProps,
  modalHeaderProps,
  classHeader
}) => {
  return (
    <div
      className={ classNames(
        styles['modal__header'],
        'flex-s-b-c',
        classHeader) }
      { ...handlersProps }
    >
      {modalHeaderProps}
    </div>
  )
}

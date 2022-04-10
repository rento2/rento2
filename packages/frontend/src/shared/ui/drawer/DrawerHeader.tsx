import classNames from 'classnames'
import { FC } from 'react'
import { SwipeableHandlers } from 'react-swipeable'
import styles from './DrawerHeader.module.scss'

interface IModalHeader {
  handlersProps: SwipeableHandlers | {}
  headerProps?: JSX.Element | undefined
  classHeader?: string
}

export const DrawerHeader: FC<IModalHeader> = ({
  handlersProps,
  headerProps,
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
      {headerProps}
    </div>
  )
}

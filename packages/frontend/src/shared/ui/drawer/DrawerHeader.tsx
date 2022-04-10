import classNames from 'classnames'
import { FC } from 'react'
import styles from './DrawerHeader.module.scss'

interface IModalHeader {
  headerProps?: JSX.Element | undefined
  classHeader?: string
}

export const DrawerHeader: FC<IModalHeader> = ({
  headerProps,
  classHeader
}) => {
  return (
    <div
      className={ classNames(
        styles['modal__header'],
        'flex-s-b-c',
        classHeader) }
    >
      {headerProps}
    </div>
  )
}

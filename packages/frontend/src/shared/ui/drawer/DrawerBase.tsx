import { FC, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { useRenderCompleted, useWindowDimensions } from '@shared/lib'
import { IDrawer } from './lib/types/IDrawer'
import { DrawerHeader } from './DrawerHeader'
import { useDrawerClose } from './lib/hooks/useDrawerClose'
import styles from './DrawerBase.module.scss'

export const DrawerBase: FC<IDrawer> = ({
  isShown,
  elementPortal,
  hide,
  bodyContent,
  labelledbyText,
  headerContent,
  transitionMs,
  classes
}) => {
  const isMounted = useRenderCompleted()
  const elementRef = useRef<HTMLDivElement>(null)
  const { heightWindow } = useWindowDimensions()

  const [heightModal, setHeightModal] = useState(0)
  useEffect(() => {
    if (isShown) {
      const { offsetHeight } = elementRef.current ?? { offsetHeight: 0 }

      setHeightModal(offsetHeight)
    }
  }, [isShown, heightWindow])

  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.code === 'Escape' && isShown) {
      hide()
    }
  }

  useEffect(() => {
    isShown
      ? classNames(document.body.style.overflow = 'hidden', document.body.style.touchAction = 'none', document.body.style.paddingRight = '17px')
      : classNames(document.body.style.overflow = 'unset', document.body.style.touchAction = 'unset', document.body.style.paddingRight = '0')

    document.addEventListener('keydown', onKeyDown, false)
    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
  }, [isShown])

  const [element, setElement] = useState<Element>()
  useEffect(() => {
    setElement(elementPortal ?? document.body)
  }, [isMounted])

  const [handlers, styleMove] = useDrawerClose(hide, isShown, heightModal, transitionMs)

  const drawer = (
    <div
      aria-modal
      aria-labelledby={ labelledbyText }
      className={ classNames(
        classes?.modal,
        styles['modal']
      ) }
      role='dialog'
      tabIndex={ -1 }
      onClick={ hide }
    >
      <div
        className={ classNames(
          styles['backdrop'],
          classes?.backdrop) }
        onClick={ hide }
      />
      <div
        className={ classNames(
          styles['modal__dialog'],
          classes?.dialog) }
        style={ styleMove }
      >
        <div
          ref={ elementRef }
          className={ classNames(
            styles['modal__content'],
            classes?.content) }
          onClick={ (e) => e.stopPropagation() }
        >
          <DrawerHeader
            classHeader={ classes?.header ?? '' }
            handlersProps={ handlers ?? {} }
            headerProps={ headerContent }
          />
          <div className={ classNames(
            styles['modal__body'],
            classes?.body) }
          >
            {bodyContent}
          </div>
        </div>
      </div>
    </div>
  )

  return isShown && (element != null) ? ReactDOM.createPortal(drawer, element) : null
}

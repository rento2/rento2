import { FC, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import FocusLock from 'react-focus-lock'
import classNames from 'classnames'
import { useRenderCompleted, useWindowDimensions } from '@shared/lib'
import { IModal } from '../types/IModal'
import styles from './ModalBase.module.scss'

export const ModalBase: FC<IModal> = ({
  isShown,
  elementPortal,
  hide,
  bodyContent,
  headerContent,
  labelledbyText,
  classes
}) => {
  const isMounted = useRenderCompleted()
  const elementRef = useRef<HTMLDivElement>(null)
  const { widthWindow, heightWindow } = useWindowDimensions()

  const [heightModal, setHeightModal] = useState(0)
  useEffect(() => {
    if (isShown) {
      const { offsetHeight, offsetTop } = elementRef.current ?? { offsetHeight: 0, offsetTop: 0 }

      setHeightModal(offsetHeight - offsetTop)
    }
  }, [isShown, heightWindow, widthWindow])

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
  }, [elementPortal, isMounted])

  const modal = (
    <>
      <div
        className={ classNames(
          styles['backdrop'],
          classes?.backdrop) }
        onClick={ hide }
      />
      <FocusLock autoFocus={ false }>
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
              styles['modal__dialog'],
              classes?.dialog,
              heightModal >= heightWindow && isShown ? styles['modal__position-dialog'] : '') }
          >
            <div
              ref={ elementRef }
              className={ classNames(
                styles['modal__content'],
                classes?.content,
                heightModal >= heightWindow && isShown ? classes?.positionContent ?? styles['modal__position-content'] : ''
              ) }
              onClick={ (e) => e.stopPropagation() }
            >
              {
              (headerContent != null)
                ? (
                  <>
                    {headerContent}
                  </>
                  )
                : ''
            }
              <div className={ classNames(
                classes?.body) }
              >
                {bodyContent}
              </div>
            </div>
          </div>
        </div>
      </FocusLock>
    </>
  )

  return isShown && (element != null) ? ReactDOM.createPortal(modal, element) : null
}

import { FC, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import FocusLock from 'react-focus-lock'
import styles from './ModalBase.module.scss'
import classNames from 'classnames'
import { useWindowDimensions } from '@hooks/useWindowDimensions'
import { useRenderCompleted } from '@hooks/useRenderCompleted'
import { IStyleMove } from '../types/IStyleMove'
import { IModal } from '../types/IModal'

interface ModalProps extends IModal {
  elementPortal?: Element
  handleHeight?: (height: number) => void
  headerContent?: JSX.Element
  style?: IStyleMove
}

export const ModalBase: FC<ModalProps> = ({
  isShown,
  elementPortal,
  handleHeight,
  hide,
  bodyContent,
  headerContent,
  labelledbyText,
  style,
  classes
}) => {
  const isMounted = useRenderCompleted()
  const elementRef = useRef<HTMLDivElement>(null)
  const { widthWindow, heightWindow } = useWindowDimensions()

  const [heightModal, setHeight] = useState(0)
  useEffect(() => {
    if (isShown) {
      const { offsetHeight, offsetTop } = elementRef.current ?? { offsetHeight: 0, offsetTop: 0 }

      setHeight(offsetHeight - offsetTop)
    }
  }, [isShown, heightWindow, widthWindow])

  const [height, setHeightModal] = useState(0)
  useEffect(() => {
    const offsetTop = elementRef.current?.offsetTop ?? 0
    setHeightModal(heightWindow - offsetTop)

    if (handleHeight != null) {
      handleHeight(height)
    }
  }, [heightModal, isShown, heightWindow, widthWindow])

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
            styles['modal'],
            heightModal >= heightWindow && isShown ? classes?.position ?? styles['modal__position'] : '') }
          role='dialog'
          style={ style }
          tabIndex={ -1 }
          onClick={ hide }
        >
          <div
            ref={ elementRef }
            className={ classNames(
              classes?.dialog,
              styles['modal__dialog'],
              heightModal >= heightWindow && isShown ? classes?.positionDialog ?? styles['modal__position-dialog'] : '') }
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
      </FocusLock>
    </>
  )

  return isShown && (element != null) ? ReactDOM.createPortal(modal, element) : null
}

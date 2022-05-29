import { FC, useCallback, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import FocusLock from 'react-focus-lock'
import classNames from 'classnames'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

import { IconClose } from './icons/IconClose'
import { useWindowDimensions } from '@shared/lib'

import bottomStyles from './Bottom.module.scss'
import rightStyles from './Right.module.scss'

interface INewModal {
  isOpen: boolean
  onClose: () => void
  title?: string
  translate?: 'right' | 'bottom'
  isSwipe?: boolean
}

export const NewModal: FC<INewModal> = ({
  isOpen,
  onClose,
  children,
  translate = 'bottom',
  title,
  isSwipe = false
}) => {
  const { widthWindow } = useWindowDimensions()

  const contentRef = useRef<HTMLDivElement>(null)

  const onKeyDown = useCallback((event: KeyboardEvent): void => {
    if (event.code === 'Escape' && isOpen) onClose()
  }, [isOpen, onClose])

  useEffect(() => {
    let timer: NodeJS.Timeout
    document.addEventListener('keydown', onKeyDown, false)
    if (isOpen) document.body.classList.add('modal-open')
    else {
      timer = setTimeout(() => {
        document.body.classList.remove('modal-open')
      }, 300)
    }

    return () => {
      clearTimeout(timer)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const styles = translate === 'bottom' ? bottomStyles : rightStyles

  if (isSwipe && widthWindow < 480) {
    return (
      <BottomSheet
        aria-modal
        expandOnContentDrag
        className={ classNames(styles['bottom-sheet']) }
        header={
          <div className={ styles['modal__header--mobile'] }>
            <button
              className={ styles['button-close--mobile'] }
              type='button'
              onClick={ onClose }
            >
              <IconClose />
            </button>
          </div>
        }
        open={ isOpen }
        snapPoints={ ({ maxHeight }) => contentRef.current != null
          ? contentRef.current.offsetHeight + 40
          : maxHeight }
        onDismiss={ onClose }
      >
        <div ref={ contentRef }
          className={ styles.modal__body }
        >
          {children}
        </div>
      </BottomSheet>
    )
  }

  return (
    <FocusLock autoFocus={ false }>
      <CSSTransition
        unmountOnExit
        classNames={ {
          enterActive: styles['enter-active'],
          enter: styles.enter,
          exitActive: styles['exit-active'],
          exit: styles.exit
        } }
        in={ isOpen }
        timeout={ 300 }
      >
        <div
          aria-modal
          className={ styles.modal }
        >
          <div className={ styles.modal__header }>
            <span className={ styles.modal__title }>
              {title}
            </span>
            <button
              className={ styles['button-close'] }
              type='button'
              onClick={ onClose }
            >
              <IconClose />
            </button>
          </div>
          <div className={ styles.modal__body }>
            {children}
          </div>
        </div>
      </CSSTransition>
      <div
        className={ classNames(styles.backdrop, { [styles['backdrop--visible']]: isOpen }) }
        onClick={ onClose }
      />
    </FocusLock>
  )
}

import { useWindowDimensions } from '@shared/lib'
import { useEffect, useRef, useState } from 'react'

import { SwipeableHandlers, SwipeEventData, useSwipeable } from 'react-swipeable'
import { IStyleMove } from '../types/IDrawer'

export const useDrawerClose = (toggle: () => void, isShown: boolean, heightModal: number, transitionMs = 500): [SwipeableHandlers, IStyleMove, (el: HTMLDivElement) => void] => {
  const [styleMove, setStyleMove] = useState<IStyleMove>({})

  const { heightWindow } = useWindowDimensions()
  const maxHeightModal = heightModal > heightWindow ? heightWindow : heightModal

  useEffect(() => {
    if (isShown) {
      setStyleMove({ height: `${maxHeightModal}px` })
    }
  }, [isShown, maxHeightModal])

  const handlers = useSwipeable({
    onSwiping: (e) => moveDrawer(e),
    onSwipedDown: (e) => closeDrawer(e)
  })

  const elementRef = useRef<HTMLDivElement>()

  const refPassthrough = (el: HTMLDivElement): void => {
    handlers.ref(el)

    elementRef.current = el
  }

  const moveDrawer = (e: SwipeEventData): void => {
    const scrollTop = elementRef.current?.scrollTop

    if (scrollTop === 0) {
      if (e.dir !== 'Down') return

      const height = maxHeightModal - Math.round(e.deltaY)

      setStyleMove({ height: `${height}px`, transition: 'all 0ms ease', overflowY: 'hidden', touchAction: 'none' })
    }
  }

  const closeDrawer = (e: SwipeEventData): void => {
    const scrollTop = elementRef.current?.scrollTop

    if (scrollTop === 0) {
      if (e.deltaY >= maxHeightModal / 3) {
        setTimeout(() => {
          toggle()
          setStyleMove({})
        }, transitionMs)

        setStyleMove({ height: '0', transition: `all ${transitionMs}ms ease`, overflowY: 'hidden', touchAction: 'none' })
      } else {
        setStyleMove({ height: `${maxHeightModal}px`, transition: `all ${transitionMs}ms ease` })
      }
    }
  }

  return [
    handlers,
    styleMove,
    refPassthrough
  ]
}

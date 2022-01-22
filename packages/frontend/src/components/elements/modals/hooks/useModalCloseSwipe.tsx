import { useState } from 'react'
import { SwipeableHandlers, SwipeEventData, useSwipeable } from 'react-swipeable'
import { useWindowDimensions } from '@hooks/useWindowDimensions'
import { IStyleMove } from '../types/IStyleMove'

export const useModalCloseSwipe = (toggle: () => void, heightModal: number, transitionMs = 500, widthWindowProps = 849): [SwipeableHandlers, IStyleMove] | [] => {
  const [styleMove, setStyleMove] = useState<IStyleMove>({})
  const { widthWindow } = useWindowDimensions()

  const handlers = useSwipeable({
    onSwiping: (e) => move(e),
    onSwipedDown: (e) => closeModal(e),
    preventDefaultTouchmoveEvent: true
  })

  const move = (e: SwipeEventData): void => {
    if (e.dir !== 'Down') return

    setStyleMove({ bottom: `-${Math.round(e.deltaY)}px`, transition: 'all 0ms ease' })
  }

  const closeModal = (e: SwipeEventData): void => {
    if (e.deltaY >= heightModal / 3) {
      setTimeout(() => {
        toggle()
        setStyleMove({})
      }, transitionMs)

      setStyleMove({ bottom: `-${heightModal}px`, transition: `all ${transitionMs}ms ease` })
    } else {
      setStyleMove({ bottom: '0px', transition: `all ${transitionMs}ms ease` })
    }
  }

  return widthWindow <= widthWindowProps
    ? [
      handlers,
      styleMove
    ]
    : []
}

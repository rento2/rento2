import { useEffect, useState } from 'react'
import { SwipeableHandlers, SwipeEventData, useSwipeable } from 'react-swipeable'
import { useWindowDimensions } from '@shared/lib'
import { IStyleMove } from '../types/IDrawer'

export const useDrawerClose = (toggle: () => void, isShown: boolean, heightModal: number, transitionMs = 500): [SwipeableHandlers, IStyleMove] => {
  const [styleMove, setStyleMove] = useState<IStyleMove>({})
  const { heightWindow } = useWindowDimensions()

  const maxHeightModal = heightModal > heightWindow ? heightWindow : heightModal

  useEffect(() => {
    if (isShown) {
      setStyleMove({ height: `${maxHeightModal}px` })
    }
  }, [isShown, heightWindow, maxHeightModal])

  const handlers = useSwipeable({
    onSwiping: (e) => move(e),
    onSwipedDown: (e) => closeModal(e)
  })

  const move = (e: SwipeEventData): void => {
    if (e.dir !== 'Down') return

    const height = maxHeightModal - Math.round(e.deltaY)

    setStyleMove({ height: `${height}px`, transition: 'all 0ms ease' })
  }

  const closeModal = (e: SwipeEventData): void => {
    if (e.deltaY >= maxHeightModal / 3) {
      setTimeout(() => {
        toggle()
        setStyleMove({})
      }, transitionMs)

      setStyleMove({ height: '0', transition: `all ${transitionMs}ms ease` })
    } else {
      setStyleMove({ height: `${maxHeightModal}px`, transition: `all ${transitionMs}ms ease` })
    }
  }

  return [
    handlers,
    styleMove
  ]
}

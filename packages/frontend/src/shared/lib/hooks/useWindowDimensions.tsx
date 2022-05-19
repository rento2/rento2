import { useState } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'

export const useWindowDimensions = (): {widthWindow: number, heightWindow: number} => {
  const [windowDimensions, setWindowDimensions] = useState({ widthWindow: 0, heightWindow: 0 })

  useIsomorphicLayoutEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize, false)

    return () => window.removeEventListener('resize', handleResize, false)
  }, [])

  function handleResize (): void {
    setWindowDimensions(
      { widthWindow: window.innerWidth, heightWindow: window.innerHeight }
    )
  }

  return windowDimensions
}

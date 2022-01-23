import { useState, useEffect } from 'react'

export const useWindowDimensions = (): {widthWindow: number, heightWindow: number} => {
  const [windowDimensions, setWindowDimensions] = useState({ widthWindow: 0, heightWindow: 0 })

  useEffect(() => {
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

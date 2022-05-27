import { useState } from 'react'

export const useToggle = (): [isShown: boolean, toggle: () => void] => {
  const [isShown, setIsShown] = useState(false)

  const toggle = (): void => setIsShown(!isShown)

  return [
    isShown,
    toggle
  ]
}

import { useState } from 'react'

export const useModal = (): [isShown: boolean, toggle: () => void] => {
  const [isShown, setIsShown] = useState(false)

  const toggle = (): void => setIsShown(!isShown)

  return [
    isShown,
    toggle
  ]
}

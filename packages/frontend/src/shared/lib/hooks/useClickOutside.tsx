import { useEffect, RefObject } from 'react'

export const useOnClickOutside = (ref: RefObject<HTMLDivElement> | null, handler: () => void): void => (
  useEffect(
    () => {
      const listener = (event: { target: EventTarget | null }): void => {
        if (ref === null) return
        const div = ref.current as HTMLElement
        if (div?.contains(event.target as HTMLElement)) {
          return
        }
        handler()
      }
      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)
      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    [ref, handler]
  )
)

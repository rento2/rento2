import { useEffect, SyntheticEvent } from 'react'

export const useOnClickOutside = (ref: React.MutableRefObject<HTMLDivElement>, handler: () => void): void => (
  useEffect(
    () => {
      const listener = (event: SyntheticEvent): any => {
        if (ref === null) return
        if (ref?.current?.contains(event.target as Element)) {
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

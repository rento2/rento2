import { useState, useEffect, useRef, useCallback, RefObject } from 'react'

interface IUseSticky {
  anchorRef: RefObject<HTMLDivElement>
  isHeaderMode: boolean
}
export const useSticky = (): IUseSticky => {
  const [isHeaderMode, setIsHeaderMode] = useState(false)
  const lastScrollTop = useRef(0)

  const anchorRef = useRef<HTMLDivElement>(null)

  const toggleMode = useCallback(() => {
    const offsetTop = anchorRef.current?.offsetTop ?? 0
    const currentScrollTop = window.scrollY

    if (lastScrollTop.current <= currentScrollTop && currentScrollTop > offsetTop) {
      setIsHeaderMode(true)
    } else setIsHeaderMode(false)

    lastScrollTop.current = currentScrollTop
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', toggleMode)
    window.addEventListener('resize', toggleMode)
    return () => {
      window.removeEventListener('scroll', toggleMode)
      window.removeEventListener('resize', toggleMode)
    }
  }, [toggleMode])

  return { anchorRef, isHeaderMode }
}

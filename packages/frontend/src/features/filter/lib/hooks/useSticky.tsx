import { useState, useEffect, useRef, useCallback, RefObject } from 'react'

interface IUseSticky {
  anchorRef: RefObject<HTMLDivElement>
  isHeaderMode: boolean
  showHeader: boolean
}
export const useSticky = (): IUseSticky => {
  const [isHeaderMode, setIsHeaderMode] = useState(false)
  const [showHeader, setShowHeader] = useState(false)
  const lastScrollTop = useRef(0)
  const anchorRef = useRef<HTMLDivElement>(null)

  const toggleMode = useCallback(() => {
    const offsetTop = (anchorRef.current?.offsetTop ?? 0) + 100
    const currentScrollTop = window.scrollY

    if (lastScrollTop.current <= currentScrollTop && currentScrollTop > offsetTop) {
      setIsHeaderMode(true)
      setShowHeader(true)
    } else if (lastScrollTop.current > currentScrollTop && currentScrollTop < offsetTop) {
      setIsHeaderMode(false)
      setShowHeader(false)
    } else {
      setShowHeader(false)
    }

    lastScrollTop.current = currentScrollTop
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', toggleMode)
    return () => {
      window.removeEventListener('scroll', toggleMode)
    }
  }, [toggleMode])

  return { anchorRef, isHeaderMode, showHeader }
}

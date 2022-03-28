import { ReactNode, ReactPortal, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
  children: ReactNode
  selector: string
}

export const CreatePortal = ({ children, selector }: IPortalProps): ReactPortal | null => {
  const ref = useRef<Element>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector) as Element
    setMounted(true)
  }, [selector])

  return mounted && (ref.current != null) ? createPortal(children, ref.current) : null
}

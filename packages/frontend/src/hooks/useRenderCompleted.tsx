import { useEffect, useState } from 'react'

export const useRenderCompleted = (): boolean => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => {
      setMounted(false)
    }
  })

  return mounted
}

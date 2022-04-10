export interface IDrawer {
  isShown: boolean
  hide: () => void
  bodyContent: JSX.Element
  labelledbyText: string
  elementPortal?: Element
  headerContent?: JSX.Element
  transitionMs?: number
  classes?: {
    modal?: string
    dialog?: string
    content?: string
    header?: string
    body?: string
    backdrop?: string
  }
}

export interface IStyleMove {
  height?: string
  transition?: string
  overflowY?: '-moz-hidden-unscrollable' | 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible'
  touchAction?: string
}

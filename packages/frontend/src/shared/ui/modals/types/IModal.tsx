export interface IModal {
  isShown: boolean
  hide: () => void
  bodyContent: JSX.Element
  labelledbyText: string
  elementPortal?: Element
  headerContent?: JSX.Element
  classes?: {
    modal?: string
    dialog?: string
    content?: string
    header?: string
    body?: string
    backdrop?: string
    positionContent?: string
  }
}

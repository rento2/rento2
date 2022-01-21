export interface IModal {
  isShown: boolean
  hide: () => void
  bodyContent: JSX.Element
  labelledbyText: string
  classes?: {
    modal?: string
    dialog?: string
    header?: string
    body?: string
    backdrop?: string
    position?: string
    positionDialog?: string
  }
}

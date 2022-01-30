import { ITagName } from './ITagName'

export interface IListProps {
  type: keyof ITagName
  classItem?: string
  text?: string
  button?: {
    buttonText: string
    classButton: string
    buttonType: string
  }
  contents?: IListProps[]
  as?: string // Этот тип если нужно будет передать тег или компонент через пропс
}

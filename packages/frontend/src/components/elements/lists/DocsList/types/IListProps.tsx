import { ITagName } from './ITagName'

export interface IListProps {
  type?: keyof ITagName // Должен быть обязательным параметром, отвечает за формирование правильной HTML структуры
  class?: string
  text?: string
  button?: {
    buttonText: string
    classButton: string
    buttonType: string
  }
  contents?: object[]
  as?: string // Этот тип если нужно будет передать тег или компонент через пропс
}

export interface IPropsMenu {
  title: string
  href: string
  // тут еще подумаю,может быть сделать отдельный интерфейс? или это нормальная практика?
  // chapter?: string
}

export interface IPropsAgreements {
  chapter: string
  listMenu: IPropsMenu[]
}

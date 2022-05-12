export interface IMetro {
  name: string
  time: string
  iconClass: string
}

export interface IAdress {
  street: string
  metro?: IMetro[]
}

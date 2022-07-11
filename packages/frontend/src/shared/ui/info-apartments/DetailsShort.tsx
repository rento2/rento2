import { stringUtils } from '@shared/lib'

interface IDetailsShort {
  roomsNum: number | string
  area: number
  storey: number
}

// TODO: Изменить входные параметры для гостей и кроватей, когда появится информация от бэка, так же изменить входные параметры на странице каталога краткосрока.
export const DetailsShort = ({ roomsNum, area, storey }: IDetailsShort): string => {
  return `${roomsNum} комн · ${area} ${stringUtils.pluralize('гость', area)} · ${storey} ${stringUtils.pluralize('кровать', storey)}`
}

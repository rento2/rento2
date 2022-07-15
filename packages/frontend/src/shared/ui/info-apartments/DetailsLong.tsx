interface IDetailsLong {
  roomsNum: number | string
  area: number | string
  storey: number | string
  totalStoreys: number | string
}

export const DetailsLong = ({ roomsNum, area, storey, totalStoreys }: IDetailsLong): string => {
  return `${roomsNum} комн · ${area} м2 · этаж ${storey}/${totalStoreys}`
}

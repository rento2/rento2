import Logger from '@ioc:Adonis/Core/Logger'
import { SubwayStations } from './../constants/SubwayStations'

export default function subwayStationToLine (
  subwayStation: string
): string | null {
  const subwayLine = SubwayStations.find(
    (station) => station.title === subwayStation
  )
  if (subwayLine != null) {
    return subwayLine.line.title
  } else {
    Logger.warn(`'${subwayStation}' station are not in our base`)
    return null
  }
}

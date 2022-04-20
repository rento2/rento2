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
    return null
  }
}

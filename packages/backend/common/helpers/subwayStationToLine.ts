import { SubwayStations } from './../constants/SubwayStations'

export default function subwayStationToLine (subwayStation: string): string {
  const subwayLine = SubwayStations.find(
    (station) => station.title === subwayStation
  )
  if (subwayLine != null) {
    return subwayLine.line.title
  } else {
    return 'These stations are not in our bases'
  }
}

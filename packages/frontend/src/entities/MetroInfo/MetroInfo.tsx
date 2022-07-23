import classNames from 'classnames'

import { IconWalker, IconMetro, IconBus } from '@shared/ui'
import { stringUtils } from '@shared/lib'

import styles from './MetroInfo.module.scss'

interface IMetroInfo {
  subwayStation: string
  timeFoot: number
  timeVehicle: number
  classSubway?: string
  classDistance?: string
  classWrapper?: string
  tagName?: React.ElementType
}

export const MetroInfo = ({ subwayStation, timeFoot, timeVehicle, classSubway, classDistance, tagName, classWrapper }: IMetroInfo): JSX.Element => {
  const Component = tagName ?? 'div'

  return (
    <Component className={ classWrapper }>
      <span className={ classNames(styles['metro-info__subway'], classSubway) }>
        <IconMetro classProps={ styles['metro-info__icon'] } />
        {subwayStation}
      </span>
      <span className={ classNames(styles['metro-info__distance'], classDistance) }>
        <IconWalker classProps={ styles['metro-info__icon'] } />
        {`${timeFoot} ${stringUtils.pluralize('минута', timeFoot)}`}
      </span>
      <span className={ classNames(styles['metro-info__distance'], classDistance) }>
        <IconBus classProps={ styles['metro-info__icon'] } />
        {`${timeVehicle} ${stringUtils.pluralize('минута', timeFoot)}`}
      </span>
    </Component>
  )
}

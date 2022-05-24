import classNames from 'classnames'
import styles from './SwitchBase.module.scss'

interface ISwitchBase {
  name: string
  labelText?: string // текст лейбла рядом с переключателем
  labelTextPlacement?: 'right' | 'left' // расположение текстового лейбла относительно свича
  containerClass?: string
}

export function SwitchBase ({ name, labelText, labelTextPlacement = 'right', containerClass }: ISwitchBase): JSX.Element {
  const labelStyles = styles[`switch__text-label-${labelTextPlacement}`]

  const textLabel = (
    <label
      className={ labelStyles }
      htmlFor={ name }
    >
      {labelText}
    </label>
  )

  return (
    <div className={ classNames(styles['switch'], containerClass) }>
      {labelTextPlacement === 'left' && textLabel}

      <div className={ classNames(styles['switch__toggle']) }>
        <input
          className={ classNames(styles['switch__hidden-checkbox']) }
          id={ name }
          name={ name }
          type="checkbox"
        />
        <label
          className={ classNames(styles['switch__inner']) }
          htmlFor={ name }
        >
          <span className={ classNames(styles['switch__dot']) } />
        </label>
      </div>

      {labelTextPlacement === 'right' && textLabel}
    </div>
  )
}

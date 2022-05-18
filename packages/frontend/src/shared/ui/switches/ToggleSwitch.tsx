import classNames from 'classnames'
import styles from './ToggleSwitch.module.scss'

interface IToggleSwitch {
  name: string
  label?: string
  labelPlacement?: 'right' | 'left'
}

export function ToggleSwitch ({ name, label, labelPlacement = 'right' }: IToggleSwitch): JSX.Element {
  const labelStyles = styles[`text-label-${labelPlacement}`]

  const textLabel = (
    <label
      className={ labelStyles }
      htmlFor={ name }
    >
      {label}
    </label>
  )

  return (
    <div className={ classNames(styles['container']) }>
      {labelPlacement === 'left' && textLabel}

      <div className={ classNames(styles['toggle']) }>
        <input
          className={ classNames(styles['checkbox']) }
          id={ name }
          name={ name }
          type="checkbox"
        />
        <label
          className={ classNames(styles['label']) }
          htmlFor={ name }
        >
          <span className={ classNames(styles['switch']) } />
        </label>
      </div>

      {labelPlacement === 'right' && textLabel}
    </div>
  )
}

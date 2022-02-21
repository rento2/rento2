/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styles from './ButtonGeneral.module.scss'

interface IButton {
  text: string
  type?: 'submit' | 'reset' | 'button'
  href?: string
}

export function ButtonGeneral (props: IButton): JSX.Element {
  const Component = props.href ? 'a' : 'button'

  return (
    <Component
      className={ styles['calculation-btn'] }
      href={ props.href }
      type={ props.type }
    >
      {props.text}
    </Component>
  )
}

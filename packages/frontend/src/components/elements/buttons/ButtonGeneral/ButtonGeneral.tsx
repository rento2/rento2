import styles from './ButtonGeneral.module.scss'

interface IButton {
  text: string
  type?: 'submit' | 'reset' | 'button'
  href?: string
}

export function ButtonGeneral (props: IButton): JSX.Element {
  const Component = props.href != null ? 'a' : 'button'

  return (
    <Component
      className={ styles['calculation-btn'] }
      type={ props.type }
    >
      {props.text}
    </Component>
  )
}

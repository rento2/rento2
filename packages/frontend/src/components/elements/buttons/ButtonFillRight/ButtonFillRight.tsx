import styles from './ButtonFillRight.module.scss'

export default function ButtonFillRight (
  propsButton: {
    text: string
    phone: string
    tagManager?: string
  }): JSX.Element {
  return (
    <a
      className={styles['button']}
      data-tag-manager={propsButton.tagManager}
      href={propsButton.phone}
    >
      {propsButton.text}
    </a>
  )
}

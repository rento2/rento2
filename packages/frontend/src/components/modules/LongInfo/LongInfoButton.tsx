export const LongInfoButton = ({ text, classProp, onClick, children }: {
  text?: string
  classProp: string | undefined
  onClick: () => void
  children?: any
}): JSX.Element => {
  return (
    <button className={ classProp }
      onClick={ onClick }
    >
      {text ?? children}
    </button>
  )
}

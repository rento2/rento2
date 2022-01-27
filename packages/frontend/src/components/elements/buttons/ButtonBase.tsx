interface IButtonBase {
  handleHide: () => void
  textProps: string
  classProps: string
}
export const ButtonBase = ({ handleHide, textProps, classProps }: IButtonBase): JSX.Element => {
  return (
    <button className={ classProps }
      onClick={ handleHide }
    >
      {textProps}
    </button>
  )
}

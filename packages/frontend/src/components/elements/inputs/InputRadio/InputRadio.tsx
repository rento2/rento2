import { FC, InputHTMLAttributes } from 'react'

interface IInputRadio extends InputHTMLAttributes<HTMLInputElement> {
  name:string,
  classProps:string,
  value:string,
}

const InputRadio: FC<IInputRadio> = ({
  name,
  classProps,
  value,
}) => {
  return (

    <input
      className={ classProps }
      name={name}
      value={value}
      type='radio'
    />
  )
}

export default InputRadio

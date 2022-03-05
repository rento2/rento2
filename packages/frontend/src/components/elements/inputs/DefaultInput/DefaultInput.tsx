import { FC, InputHTMLAttributes } from 'react'
import styles from './DefaultInput.module.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  autoFocus?: boolean
  autoComplete?: string
  placeholder?: string
  required?: boolean
  className?: string
}

const DefaultInput: FC<IInputProps> = ({
  type = 'text',
  autoFocus = false,
  autoComplete = 'off',
  required = false,
  placeholder = '',
  className,
  ...props
}) => {
  return (

    <input
      autoComplete={ autoComplete }
      autoFocus={ autoFocus }
      className={ styles['input'] }
      placeholder={ placeholder }
      required={ required }
      type={ type }
      { ...props }
    />
  )
}

export default DefaultInput

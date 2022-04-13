import { IIconClassProps } from './types/iconTypes'

export function IconLocation (props: IIconClassProps): JSX.Element {
  return (
    <svg
      className={ props.classProps }
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.4999 13.4304C14.223 13.4304 15.6199 12.0336 15.6199 10.3104C15.6199 8.5873 14.223 7.19043 12.4999 7.19043C10.7768 7.19043 9.37988 8.5873 9.37988 10.3104C9.37988 12.0336 10.7768 13.4304 12.4999 13.4304Z" />
      <path d="M4.11995 8.49C6.08995 -0.169998 18.92 -0.159997 20.88 8.5C22.03 13.58 18.87 17.88 16.1 20.54C14.09 22.48 10.91 22.48 8.88995 20.54C6.12995 17.88 2.96995 13.57 4.11995 8.49Z" />
    </svg>
  )
}

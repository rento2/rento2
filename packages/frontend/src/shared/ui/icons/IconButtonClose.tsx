import { IIconClassProps } from './types/iconTypes'

export const IconButtonClose = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ props.classProps }
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.1699 18.8299L18.8299 13.1699"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18.8299 18.8299L13.1699 13.1699"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13 26H19C24 26 26 24 26 19V13C26 8 24 6 19 6H13C8 6 6 8 6 13V19C6 24 8 26 13 26Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

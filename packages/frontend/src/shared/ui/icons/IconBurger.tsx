import { IIconClassProps } from './types/iconTypes'

export const IconBurger = (props: IIconClassProps): JSX.Element => (
  <svg className={ props.classProps }
    height="40"
    viewBox="0 0 40 40"
    width="40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 11.6665H35"
      stroke="black"
      strokeLinecap="round"
    />
    <path d="M5 20H35"
      stroke="black"
      strokeLinecap="round"
    />
    <path d="M5 28.3335H35"
      stroke="black"
      strokeLinecap="round"
    />
  </svg>
)

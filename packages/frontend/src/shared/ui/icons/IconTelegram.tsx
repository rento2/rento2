import { IIconClassProps } from './types/iconTypes'

export function IconTelegram (props: IIconClassProps): JSX.Element {
  return (
    <svg className={ props.classProps }
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path clipRule="evenodd"
        d="M20.1776 8.67631L15.9287 20.3593C15.7198 20.9341 14.9109 20.9474 14.6842 20.3785L12.6664 15.3341L7.62052 13.3163C7.05163 13.0882 7.06496 12.2793 7.63978 12.0704L19.3227 7.8215C19.8546 7.62891 20.3716 8.14446 20.1776 8.67631ZM13.9993 0.666992C6.6349 0.666992 0.666016 6.63588 0.666016 14.0003C0.666016 21.3633 6.6349 27.3337 13.9993 27.3337C21.3623 27.3337 27.3327 21.3633 27.3327 14.0003C27.3327 6.63588 21.3623 0.666992 13.9993 0.666992Z"
        fill="#392B58"
        fillRule="evenodd"
      />
    </svg>

  )
}

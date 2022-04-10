import { IIconClassProps } from './types/iconTypes'

export function IconTelegramHeader (props: IIconClassProps): JSX.Element {
  return (
    <svg className={ props.classProps }
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16"
        cy="16"
        fill="white"
        fillOpacity="0.4"
        r="12"
      />
      <path clipRule="evenodd"
        d="M22.1776 10.6763L17.9287 22.3593C17.7198 22.9341 16.9109 22.9474 16.6842 22.3785L14.6664 17.3341L9.62052 15.3163C9.05163 15.0882 9.06496 14.2793 9.63978 14.0704L21.3227 9.8215C21.8546 9.62891 22.3716 10.1445 22.1776 10.6763ZM15.9993 2.66699C8.6349 2.66699 2.66602 8.63588 2.66602 16.0003C2.66602 23.3633 8.6349 29.3337 15.9993 29.3337C23.3623 29.3337 29.3327 23.3633 29.3327 16.0003C29.3327 8.63588 23.3623 2.66699 15.9993 2.66699Z"
        fill="#469BFF"
        fillRule="evenodd"
      />
    </svg>
  )
}

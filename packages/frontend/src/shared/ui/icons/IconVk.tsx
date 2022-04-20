import { IIconClassProps } from './types/iconTypes'

export function IconVk (props: IIconClassProps): JSX.Element {
  return (
    <svg className={ props.classProps }
      height="26"
      viewBox="0 0 26 26"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.9905 0H9.00953C1.72651 0 0 1.72651 0 9.00953V16.9905C0 24.2735 1.72651 26 9.00953 26H16.9905C24.2735 26 26 24.2735 26 16.9905V9.00953C26 1.72651 24.2564 0 16.9905 0ZM20.9895 18.5472H19.1021C18.3871 18.5472 18.1669 17.9801 16.8808 16.6769C15.7636 15.5938 15.2688 15.45 14.9934 15.45C14.6042 15.45 14.4937 15.5597 14.4937 16.0935V17.7989C14.4937 18.2563 14.3499 18.5309 13.1393 18.5309C11.1374 18.5309 8.9161 17.3203 7.35858 15.0649C5.00972 11.7598 4.36705 9.28415 4.36705 8.77229C4.36705 8.49686 4.47674 8.2393 5.00566 8.2393H6.8971C7.37564 8.2393 7.55764 8.45949 7.7437 8.97134C8.67885 11.6712 10.2364 14.0363 10.879 14.0363C11.1163 14.0363 11.226 13.9266 11.226 13.3213V10.5329C11.1537 9.24677 10.4769 9.13628 10.4769 8.67967C10.4769 8.45949 10.6589 8.2393 10.9505 8.2393H13.925C14.3272 8.2393 14.475 8.45949 14.475 8.93316V12.6949C14.475 13.1012 14.657 13.245 14.7667 13.245C15.004 13.245 15.2071 13.1012 15.6466 12.6608C17.0051 11.1374 17.9784 8.78854 17.9784 8.78854C18.1052 8.51311 18.3254 8.25556 18.8039 8.25556H20.6954C21.2625 8.25556 21.3892 8.54723 21.2625 8.95347C21.0252 10.0536 18.7105 13.3205 18.7105 13.3205C18.5114 13.6504 18.435 13.7942 18.7105 14.1622C18.9136 14.4377 19.5741 15.0088 20.0137 15.5207C20.8221 16.4388 21.4436 17.209 21.6094 17.742C21.7954 18.2709 21.5208 18.5464 20.987 18.5464L20.9895 18.5472Z"
        fill="#392B58"
      />
    </svg>

  )
}
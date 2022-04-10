import { IIconClassProps } from './types/iconTypes'

export function IconVkHeader (props: IIconClassProps): JSX.Element {
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
      <path d="M19.9905 3H12.0095C4.72651 3 3 4.72651 3 12.0095V19.9905C3 27.2735 4.72651 29 12.0095 29H19.9905C27.2735 29 29 27.2735 29 19.9905V12.0095C29 4.72651 27.2564 3 19.9905 3ZM23.9895 21.5472H22.1021C21.3871 21.5472 21.1669 20.9801 19.8808 19.6769C18.7636 18.5938 18.2688 18.45 17.9934 18.45C17.6042 18.45 17.4937 18.5597 17.4937 19.0935V20.7989C17.4937 21.2563 17.3499 21.5309 16.1393 21.5309C14.1374 21.5309 11.9161 20.3203 10.3586 18.0649C8.00972 14.7598 7.36705 12.2841 7.36705 11.7723C7.36705 11.4969 7.47674 11.2393 8.00566 11.2393H9.8971C10.3756 11.2393 10.5576 11.4595 10.7437 11.9713C11.6789 14.6712 13.2364 17.0363 13.879 17.0363C14.1163 17.0363 14.226 16.9266 14.226 16.3213V13.5329C14.1537 12.2468 13.4769 12.1363 13.4769 11.6797C13.4769 11.4595 13.6589 11.2393 13.9505 11.2393H16.925C17.3272 11.2393 17.475 11.4595 17.475 11.9332V15.6949C17.475 16.1012 17.657 16.245 17.7667 16.245C18.004 16.245 18.2071 16.1012 18.6466 15.6608C20.0051 14.1374 20.9784 11.7885 20.9784 11.7885C21.1052 11.5131 21.3254 11.2556 21.8039 11.2556H23.6954C24.2625 11.2556 24.3892 11.5472 24.2625 11.9535C24.0252 13.0536 21.7105 16.3205 21.7105 16.3205C21.5114 16.6504 21.435 16.7942 21.7105 17.1622C21.9136 17.4377 22.5741 18.0088 23.0137 18.5207C23.8221 19.4388 24.4436 20.209 24.6094 20.742C24.7954 21.2709 24.5208 21.5464 23.987 21.5464L23.9895 21.5472Z"
        fill="#1174E9"
      />
    </svg>

  )
}

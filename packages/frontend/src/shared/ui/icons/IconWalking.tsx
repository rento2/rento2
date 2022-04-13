import { IIconClassProps } from './types/iconTypes'

export function IconWalking (props: IIconClassProps): JSX.Element {
  return (
    <svg
      className={ props.classProps }
      height="13"
      viewBox="0 0 10 13"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M7 1.66638C7 2.40278 6.40303 2.99975 5.66663 2.99975C4.93022 2.99975 4.33325 2.40278 4.33325 1.66638C4.33325 0.929979 4.93022 0.333008 5.66663 0.333008C6.40303 0.333008 7 0.929979 7 1.66638ZM8.271 5.51453L9.66677 6.33345L9.00008 7.66682L7.50692 6.83617L6.66668 6.00011L6.36701 7.58786L7.02165 9.2007L7.33304 13.0003H5.66632L5.33298 10.6669L4.66656 9.00018L3.76948 10.8362L1.6662 13.0003L0.332831 12.0003L2.33316 9.66687L2.95961 7.38142L3.34784 5.48978L0.99991 7.33353L0.109131 6.15916L3.99987 3L6.7774 3.82807L8.271 5.51453Z"
        fillRule="evenodd"
      />
    </svg>
  )
}

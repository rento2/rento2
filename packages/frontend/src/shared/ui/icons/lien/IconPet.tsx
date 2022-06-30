import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconPet = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon-lien'], props.classProps) }
      height="23"
      viewBox="0 0 21 23"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path clipRule="evenodd"
        d="M13.4874 10.8875C13.0227 10.8875 12.5124 11.3927 12.5124 12.2C12.5124 13.0073 13.0227 13.5125 13.4874 13.5125C13.9522 13.5125 14.4624 13.0073 14.4624 12.2C14.4624 11.3927 13.9522 10.8875 13.4874 10.8875ZM11.7624 12.2C11.7624 11.1433 12.461 10.1375 13.4874 10.1375C14.5139 10.1375 15.2124 11.1433 15.2124 12.2C15.2124 13.2567 14.5139 14.2625 13.4874 14.2625C12.461 14.2625 11.7624 13.2567 11.7624 12.2ZM9.85683 18.8906C10.0474 16.6098 12.0658 14.75 14.3537 14.75C16.467 14.75 18.4563 16.4412 18.8072 18.522L18.8072 18.5223C18.9646 19.4608 18.9318 20.247 18.5915 20.8828C18.2463 21.5277 17.6261 21.9432 16.7804 22.2301C16.2195 22.4204 15.2352 22.5035 14.3002 22.5035C13.3652 22.5034 12.381 22.4203 11.8201 22.2301C11.0292 21.962 10.4699 21.5851 10.149 20.9994C9.83597 20.4281 9.78763 19.7239 9.85681 18.8908L9.85683 18.8906ZM10.6042 18.9529C10.7625 17.0601 12.4566 15.5 14.3537 15.5C16.0991 15.5 17.7773 16.9251 18.0676 18.6467C18.2139 19.5193 18.1557 20.1077 17.9302 20.5289C17.7096 20.9412 17.2892 21.2655 16.5394 21.5199C16.1039 21.6677 15.2267 21.7535 14.3003 21.7535C13.3738 21.7535 12.4965 21.6675 12.0609 21.5199C11.3664 21.2844 11.0031 20.9975 10.8067 20.639C10.6023 20.266 10.5384 19.7455 10.6042 18.9531L10.6042 18.9529ZM16.5625 12.875C16.5625 12.5755 16.654 12.3188 16.784 12.1454C16.914 11.9721 17.0649 11.9 17.2 11.9C17.335 11.9 17.4859 11.9721 17.6159 12.1454C17.7459 12.3188 17.8375 12.5755 17.8375 12.875C17.8375 13.1745 17.7459 13.4312 17.6159 13.6046C17.4859 13.7778 17.335 13.85 17.2 13.85C17.0649 13.85 16.914 13.7778 16.784 13.6046C16.654 13.4312 16.5625 13.1745 16.5625 12.875ZM17.2 11.15C16.7759 11.15 16.4205 11.3801 16.184 11.6954C15.9476 12.0106 15.8125 12.4289 15.8125 12.875C15.8125 13.3211 15.9476 13.7394 16.184 14.0546C16.4205 14.3699 16.7759 14.6 17.2 14.6C17.624 14.6 17.9794 14.3699 18.2159 14.0546C18.4523 13.7394 18.5875 13.3211 18.5875 12.875C18.5875 12.4289 18.4523 12.0106 18.2159 11.6954C17.9794 11.3801 17.624 11.15 17.2 11.15ZM19.3938 14.9375C19.196 14.9375 18.925 15.156 18.925 15.575C18.925 15.994 19.196 16.2125 19.3938 16.2125C19.5915 16.2125 19.8625 15.994 19.8625 15.575C19.8625 15.156 19.5915 14.9375 19.3938 14.9375ZM18.175 15.575C18.175 14.8756 18.6596 14.1875 19.3938 14.1875C20.128 14.1875 20.6125 14.8756 20.6125 15.575C20.6125 16.2744 20.128 16.9625 19.3938 16.9625C18.6596 16.9625 18.175 16.2744 18.175 15.575ZM9.47485 14.225C9.47485 13.9255 9.56637 13.6688 9.69641 13.4954C9.82636 13.3221 9.97726 13.25 10.1124 13.25C10.2474 13.25 10.3983 13.3221 10.5283 13.4954C10.6583 13.6688 10.7499 13.9255 10.7499 14.225C10.7499 14.5245 10.6583 14.7812 10.5283 14.9546C10.3983 15.1279 10.2474 15.2 10.1124 15.2C9.97726 15.2 9.82636 15.1279 9.69641 14.9546C9.56637 14.7812 9.47485 14.5245 9.47485 14.225ZM10.1124 12.5C9.68826 12.5 9.33291 12.7301 9.09641 13.0454C8.85999 13.3606 8.72485 13.7789 8.72485 14.225C8.72485 14.6711 8.85999 15.0894 9.09641 15.4046C9.33291 15.7199 9.68826 15.95 10.1124 15.95C10.5364 15.95 10.8918 15.7199 11.1283 15.4046C11.3647 15.0894 11.4999 14.6711 11.4999 14.225C11.4999 13.7789 11.3647 13.3606 11.1283 13.0454C10.8918 12.7301 10.5364 12.5 10.1124 12.5Z"
        fillRule="evenodd"
      />
      <path clipRule="evenodd"
        d="M7.26256 1.13751C7.72728 1.13751 8.23756 1.64273 8.23756 2.45001C8.23756 3.2573 7.72728 3.76251 7.26256 3.76251C6.79785 3.76251 6.28756 3.2573 6.28756 2.45001C6.28756 1.64273 6.79785 1.13751 7.26256 1.13751ZM8.98756 2.45001C8.98756 1.39334 8.28902 0.387512 7.26256 0.387512C6.23611 0.387512 5.53756 1.39334 5.53756 2.45001C5.53756 3.50669 6.23611 4.51251 7.26256 4.51251C8.28902 4.51251 8.98756 3.50669 8.98756 2.45001ZM10.8932 9.14065C10.7026 6.85983 8.68423 5 6.39635 5C4.283 5 2.29373 6.69118 1.94282 8.77201L1.94276 8.77235C1.78537 9.71085 1.81818 10.497 2.15852 11.1329C2.50366 11.7777 3.12391 12.1932 3.9696 12.4801C4.53053 12.6704 5.51479 12.7535 6.44977 12.7535C7.38477 12.7535 8.36898 12.6703 8.92988 12.4801C9.72083 12.212 10.2801 11.8351 10.601 11.2494C10.914 10.6781 10.9624 9.97392 10.8932 9.14084L10.8932 9.14065ZM10.1458 9.20291C9.98749 7.31006 8.2934 5.75 6.39635 5.75C4.65094 5.75 2.97272 7.17506 2.68237 8.89673C2.53608 9.7693 2.59432 10.3577 2.81977 10.7789C3.04045 11.1912 3.46083 11.5155 4.21059 11.7699C4.64608 11.9177 5.52326 12.0035 6.44974 12.0035C7.37619 12.0035 8.25346 11.9175 8.68906 11.7699C9.38363 11.5344 9.74685 11.2475 9.9433 10.889C10.1477 10.516 10.2116 9.99553 10.1458 9.2031L10.1458 9.20291ZM4.18755 3.12498C4.18755 2.82548 4.09603 2.56877 3.96599 2.39539C3.83604 2.22212 3.68514 2.14998 3.55005 2.14998C3.41495 2.14998 3.26405 2.22212 3.1341 2.39539C3.00406 2.56877 2.91255 2.82548 2.91255 3.12498C2.91255 3.42448 3.00406 3.68119 3.1341 3.85458C3.26405 4.02784 3.41495 4.09998 3.55005 4.09998C3.68514 4.09998 3.83604 4.02784 3.96599 3.85458C4.09603 3.68119 4.18755 3.42448 4.18755 3.12498ZM3.55005 1.39998C3.97414 1.39998 4.32949 1.63005 4.56599 1.94539C4.80241 2.26061 4.93755 2.6789 4.93755 3.12498C4.93755 3.57107 4.80241 3.98936 4.56599 4.30458C4.32949 4.61991 3.97414 4.84998 3.55005 4.84998C3.12595 4.84998 2.7706 4.61991 2.5341 4.30458C2.29768 3.98936 2.16255 3.57107 2.16255 3.12498C2.16255 2.6789 2.29768 2.26061 2.5341 1.94539C2.7706 1.63005 3.12595 1.39998 3.55005 1.39998ZM1.35623 5.1875C1.554 5.1875 1.82498 5.40599 1.82498 5.825C1.82498 6.244 1.554 6.4625 1.35623 6.4625C1.15846 6.4625 0.887482 6.244 0.887482 5.825C0.887482 5.40599 1.15846 5.1875 1.35623 5.1875ZM2.57498 5.825C2.57498 5.12562 2.09044 4.4375 1.35623 4.4375C0.622021 4.4375 0.137482 5.12562 0.137482 5.825C0.137482 6.52437 0.622021 7.2125 1.35623 7.2125C2.09044 7.2125 2.57498 6.52437 2.57498 5.825ZM11.2751 4.475C11.2751 4.1755 11.1836 3.91878 11.0536 3.7454C10.9236 3.57213 10.7727 3.5 10.6376 3.5C10.5025 3.5 10.3517 3.57213 10.2217 3.7454C10.0917 3.91878 10.0001 4.1755 10.0001 4.475C10.0001 4.7745 10.0917 5.03121 10.2217 5.20459C10.3517 5.37786 10.5025 5.45 10.6376 5.45C10.7727 5.45 10.9236 5.37786 11.0536 5.20459C11.1836 5.03121 11.2751 4.7745 11.2751 4.475ZM10.6376 2.75C11.0617 2.75 11.4171 2.98007 11.6536 3.2954C11.89 3.61062 12.0251 4.02891 12.0251 4.475C12.0251 4.92108 11.89 5.33937 11.6536 5.65459C11.4171 5.96993 11.0617 6.2 10.6376 6.2C10.2136 6.2 9.8582 5.96993 9.6217 5.65459C9.38528 5.33937 9.25015 4.92108 9.25015 4.475C9.25015 4.02891 9.38528 3.61062 9.6217 3.2954C9.8582 2.98007 10.2136 2.75 10.6376 2.75Z"
        fillRule="evenodd"
      />
    </svg>
  )
}

import { IIconClassProps } from '../types/iconTypes'
import classNames from 'classnames'
import styles from '../IconBaseStyles.module.scss'

export const IconFacebook = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ classNames(styles['icon-social'], props.classProps) }
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16"
        cy="16"
        r="13"
      />
      <path d="M2.66931 16.0027C2.67006 19.1778 3.80327 22.2485 5.86526 24.6629C7.92725 27.0773 10.7828 28.6771 13.9186 29.1747V19.856H10.536V16.0027H13.9226V13.0693C13.8479 12.3828 13.9252 11.6882 14.1491 11.0349C14.373 10.3816 14.738 9.7856 15.2182 9.28925C15.6984 8.7929 16.2819 8.40837 16.9275 8.16297C17.573 7.91757 18.2647 7.81732 18.9533 7.86934C19.9533 7.88534 20.9533 7.97467 21.94 8.13601V11.4147H20.2546C19.9682 11.3772 19.677 11.4045 19.4025 11.4946C19.1281 11.5848 18.8774 11.7355 18.669 11.9356C18.4606 12.1356 18.2998 12.38 18.1986 12.6505C18.0973 12.9211 18.0582 13.2109 18.084 13.4987V16.0027H21.7786L21.188 19.8573H18.084V29.1747C20.6008 28.7769 22.951 27.6663 24.8562 25.9744C26.7614 24.2824 28.142 22.08 28.8343 19.6278C29.5267 17.1756 29.5019 14.5763 28.7629 12.1378C28.0239 9.69924 26.6016 7.52351 24.6645 5.8682C22.7273 4.21288 20.3564 3.1473 17.8325 2.79761C15.3085 2.44792 12.7372 2.82878 10.423 3.89508C8.10876 4.96138 6.14853 6.66847 4.77438 8.81424C3.40024 10.96 2.66972 13.4546 2.66931 16.0027Z" />
    </svg>
  )
}
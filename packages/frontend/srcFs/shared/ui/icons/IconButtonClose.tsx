import { IIconClassProps } from '@shared/lib/types/iconTypes'

export const IconButtonClose = (props: IIconClassProps): JSX.Element => {
  return (
    <svg className={ props.classProps }
      height='20'
      viewBox='0 0 20 20'
      width='20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M3.33374 16.666L16.6662 3.33357'
        stroke='#6F57EB'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
      <path d='M3.33374 3.33398L16.6662 16.6664'
        stroke='#6F57EB'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  )
}

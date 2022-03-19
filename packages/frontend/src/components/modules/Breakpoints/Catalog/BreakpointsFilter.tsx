import stylesContainer from '../Container.module.scss'
import styles from './BreakpointsFilter.module.scss'
import classNames from 'classnames'

export const BreakpointsFilter = (): JSX.Element => {
  return (
    <div className={ styles['filter'] }>
      <div className={ classNames(styles['filter__inner'], stylesContainer['container']) }>
        <div className={ styles['filter__box'] }>
          <div className={ styles['filter__item'] }>
            От 50000
          </div>
          <div className={ styles['filter__item'] }>
            До 2000000
          </div>
        </div>
        <div className={ styles['filter__box'] }>
          <div className={ classNames(styles['filter__item'], styles['filter__item_mob'], styles['filter__item_size']) }>
            Фильтры
          </div>
          <div className={ classNames(styles['filter__search'], styles['filter__search_mob'], styles['filter__search_color'], 'flex-center') }>
            <svg fill="none"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 16H26"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path d="M6 8H26"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path d="M6 24H26"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <circle cx="22"
                cy="16"
                fill="black"
                r="2"
              />
              <circle cx="9"
                cy="8"
                fill="black"
                r="2"
              />
              <circle cx="14"
                cy="24"
                fill="black"
                r="2"
              />
              <circle cx="26"
                cy="6"
                fill="#C4C4C4"
                r="6"
              />
              <path d="M26.8584 5.128C27.6824 5.208 28.3104 5.464 28.7424 5.896C29.1744 6.32 29.3904 6.864 29.3904 7.528C29.3904 8.008 29.2704 8.444 29.0304 8.836C28.7904 9.22 28.4304 9.528 27.9504 9.76C27.4784 9.984 26.8984 10.096 26.2104 10.096C25.6104 10.096 25.0344 10.008 24.4824 9.832C23.9304 9.648 23.4784 9.396 23.1264 9.076L23.6784 8.128C23.9664 8.4 24.3344 8.62 24.7824 8.788C25.2304 8.948 25.7064 9.028 26.2104 9.028C26.8344 9.028 27.3184 8.896 27.6624 8.632C28.0144 8.368 28.1904 8.004 28.1904 7.54C28.1904 7.076 28.0184 6.716 27.6744 6.46C27.3304 6.204 26.8104 6.076 26.1144 6.076H25.4424V5.236L27.5544 2.644H23.5104V1.6H29.0544V2.416L26.8584 5.128Z"
                fill="black"
              />
            </svg>

          </div>
          <div className={ classNames(styles['filter__search'], styles['filter__search_color'], 'flex-center') }>
            <svg fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.7071 5.29286L17.7071 1.29281C17.7072 1.29299 17.7069 1.29262 17.7071 1.29281C17.6839 1.2697 17.6591 1.24734 17.6338 1.22657C17.6222 1.21706 17.6101 1.20881 17.5982 1.1999C17.5839 1.18926 17.57 1.17824 17.5552 1.16835C17.541 1.15884 17.5262 1.15059 17.5116 1.14187C17.4982 1.13385 17.4851 1.12546 17.4713 1.11806C17.4564 1.11009 17.4411 1.10334 17.4259 1.09616C17.4115 1.08937 17.3973 1.0822 17.3826 1.07606C17.3679 1.06996 17.3528 1.06499 17.3378 1.05965C17.322 1.05398 17.3064 1.04793 17.2903 1.04305C17.2753 1.03851 17.26 1.03518 17.2449 1.03138C17.2284 1.02721 17.2121 1.02262 17.1954 1.01929C17.1778 1.01582 17.1601 1.01371 17.1424 1.01118C17.1279 1.00912 17.1135 1.0063 17.0987 1.00485C17.0331 0.998383 16.9669 0.998383 16.9013 1.00485C16.8865 1.0063 16.8722 1.00907 16.8576 1.01118C16.8399 1.01371 16.8221 1.01577 16.8046 1.01929C16.7878 1.02262 16.7716 1.02721 16.7551 1.03138C16.74 1.03518 16.7247 1.03851 16.7097 1.04305C16.6936 1.04793 16.678 1.05398 16.6622 1.05965C16.6472 1.06504 16.6321 1.06996 16.6174 1.07606C16.6026 1.08215 16.5885 1.08937 16.5741 1.09616C16.5589 1.10334 16.5436 1.11009 16.5287 1.11806C16.5149 1.12546 16.5018 1.13385 16.4884 1.14187C16.4738 1.15059 16.459 1.15884 16.4448 1.16835C16.43 1.17824 16.4161 1.18926 16.4018 1.1999C16.3899 1.20881 16.3778 1.21706 16.3662 1.22657C16.3409 1.24734 16.3165 1.26923 16.2934 1.29234C16.2936 1.29215 16.2932 1.29252 16.2934 1.29234L12.2929 5.29281C11.9024 5.68333 11.9024 6.31652 12.2929 6.70704C12.6834 7.09756 13.3166 7.09756 13.7071 6.70704L16 4.41414V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V4.41418L20.2929 6.70708C20.6834 7.0976 21.3166 7.0976 21.7072 6.70708C22.0976 6.31652 22.0976 5.68338 21.7071 5.29286Z"
                fill="black"
              />
              <path d="M10.2929 17.293L8.00002 19.5859V8C8.00002 7.44771 7.55231 7 7.00002 7C6.44774 7 6.00003 7.44771 6.00003 8V19.5859L3.70712 17.293C3.3166 16.9025 2.68341 16.9025 2.29289 17.293C1.90237 17.6835 1.90237 18.3167 2.29289 18.7072L6.29291 22.7073C6.29272 22.7071 6.2931 22.7075 6.29291 22.7073C6.31602 22.7303 6.34091 22.7528 6.36617 22.7735C6.37775 22.783 6.38999 22.7913 6.40189 22.8002C6.4161 22.8109 6.43002 22.8219 6.44478 22.8318C6.45903 22.8413 6.4738 22.8496 6.48843 22.8583C6.50183 22.8663 6.51491 22.8747 6.52869 22.882C6.5436 22.89 6.55893 22.8968 6.57416 22.9039C6.5885 22.9107 6.60266 22.9179 6.61738 22.924C6.63215 22.9301 6.64724 22.9351 6.66224 22.9404C6.67804 22.9461 6.6936 22.9521 6.70972 22.957C6.72472 22.9615 6.73996 22.9649 6.75515 22.9687C6.7716 22.9728 6.78787 22.9774 6.80465 22.9808C6.82223 22.9842 6.83994 22.9863 6.85762 22.9888C6.8722 22.9909 6.88659 22.9937 6.90135 22.9951C6.96698 23.0016 7.03312 23.0016 7.09874 22.9951C7.11351 22.9937 7.12785 22.9909 7.14248 22.9888C7.16015 22.9863 7.17792 22.9842 7.19545 22.9807C7.21223 22.9774 7.22845 22.9728 7.2449 22.9686C7.26009 22.9648 7.27532 22.9615 7.29032 22.9569C7.30645 22.9521 7.32206 22.946 7.33781 22.9404C7.35281 22.935 7.3679 22.93 7.38267 22.9239C7.39739 22.9179 7.4115 22.9107 7.42584 22.9039C7.44107 22.8967 7.45645 22.89 7.47136 22.8819C7.48509 22.8746 7.49817 22.8662 7.51153 22.8582C7.52615 22.8495 7.54097 22.8412 7.55522 22.8317C7.56998 22.8218 7.58386 22.8108 7.59801 22.8002C7.60997 22.7913 7.6222 22.783 7.63383 22.7735C7.6589 22.7529 7.68305 22.7311 7.70601 22.7082C7.70639 22.7079 7.70676 22.7076 7.70709 22.7072L11.7071 18.7072C12.0976 18.3167 12.0976 17.6835 11.7071 17.293C11.3166 16.9024 10.6835 16.9025 10.2929 17.293Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={ classNames(styles['filter__search'], 'flex-center') }>
            <svg fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path d="M16.4434 16.4434L20.9997 20.9997"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div>
            Сбросить
          </div>
        </div>
      </div>
    </div>
  )
}

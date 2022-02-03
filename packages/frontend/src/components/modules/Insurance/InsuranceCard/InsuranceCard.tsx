import styles from './InsuranceCard.module.scss'
import Image from 'next/image'
import classNames from 'classnames'

const InsuranceCard = (props: {objectCompensation: string, pathPic: string, compensationMob: string, compensationDesktop: string, altPic: string}): JSX.Element => {
  return (
    <li className={ styles['insurance__item'] }>
      <Image
        alt={ props.altPic }
        className={ styles['insurance__item-img'] }
        height="197"
        src={ props.pathPic }
        width="317"
      />
      <p className={ styles['insurance__requirement-price'] }>
        до
        <span className={ classNames(styles['insurance__requirement-price'],
          styles['insurance__requirement-price_color'],
          styles['insurance__requirement-price_desktop'],
          styles['insurance__requirement-price_mob']) }
        >
          {props.compensationMob}
        </span>
        <span className={ classNames(styles['insurance__requirement-price'],
          styles['insurance__requirement-price_color'],
          styles['insurance__requirement-price_desktop']
        )
      }
        >
          {props.compensationDesktop}
        </span>
      </p>
      <p className={ styles['insurance__requirement'] }>
        {props.objectCompensation}
      </p>
    </li>
  )
}

export default InsuranceCard

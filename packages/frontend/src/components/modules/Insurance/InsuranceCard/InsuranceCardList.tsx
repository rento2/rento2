import styles from './InsuranceCardList.module.scss'
import InsuranceCard from './InsuranceCard'
import classNames from 'classnames'

const InsuranceCardList = (): JSX.Element => {
  const insuranceData = [
    {
      compensationMob: ' 1 млн рублей',
      compensationDesktop: ' 1 000 000 рублей',
      objectCompensation: 'За испорченные вещи и мебель',
      pathPic: '/images/owners/insurance-armchair.jpg',
      altPic: 'insurance-armchair.jpg'
    },
    {
      compensationMob: ' 1 млн рублей',
      compensationDesktop: ' 1 000 000 рублей',
      objectCompensation: 'За испорченный ремонт',
      pathPic: '/images/owners/insurance-interior.jpg',
      altPic: 'insurance-interior.jpg'
    },
    {
      compensationMob: ' 1 млн рублей',
      compensationDesktop: ' 1 000 000 рублей',
      objectCompensation: 'Если пострадают соседи',
      pathPic: '/images/owners/insurance-building.jpg',
      altPic: 'insurance-building.jpg'
    }
  ]
  return (
    <ul className={ classNames(styles['insurance__list'],
      styles['container-owner']) }
    >
      {insuranceData.map((item, index) => (<InsuranceCard key={ index }
        altPic={ item.altPic }
        compensationDesktop={ item.compensationDesktop }
        compensationMob={ item.compensationMob }
        objectCompensation={ item.objectCompensation }
        pathPic={ item.pathPic }
      />)
      )
    }
    </ul>
  )
}

export default InsuranceCardList

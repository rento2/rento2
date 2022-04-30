import { dataOwners } from '../../model/dataOwners '
import { dataTenants } from '../../model/dataTenants'
import { ItemAgreements } from '../AgreementsItems/AgreementsItem'
import styles from './Agreements.module.scss'

export function AgreementsList (): JSX.Element {
  return (
    <div className={ styles['container'] }>
      <div className={ styles['contract'] }>
        <ItemAgreements data={ dataTenants }
          title="Арендаторам"
        />
      </div>
      <div className={ styles['contract'] }>
        <ItemAgreements data={ dataOwners }
          title="Собственникам"
        />
      </div>
    </div>
  )
}

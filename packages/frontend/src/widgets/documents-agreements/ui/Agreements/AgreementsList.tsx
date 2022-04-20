
import { dataOwners } from '../../model/dataOwners '
import { dataTenants } from '../../model/dataTenants'
import { ItemAgreements } from '../ItemAgreements/ItemAgreements'
import style from './Agreements.module.scss'

export function AgreementsList (): |JSX.Element {
  return (
    <div className={ style['container'] }>
      <div className={ style['contract'] }>
        <ItemAgreements data={ dataOwners }
          title="Арендаторам"
        />
      </div>
      <div className={ style['contract'] }>
        <ItemAgreements data={ dataTenants }
          title="Собственникам"
        />
      </div>
    </div>
  )
}

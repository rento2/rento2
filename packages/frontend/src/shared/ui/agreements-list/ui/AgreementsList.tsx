import { Owners, Tenants } from '@widgets/documents-agreements'
import style from './Agreements.module.scss'

export function AgreementsList (): |JSX.Element {
  return (
    <div className={ style['container'] }>
      <div className={ style['container_contract'] }>
        <Tenants title="Арендаторам" />
      </div>
      <div className={ style['container_contract'] }>
        <Owners title="Собственникам" />
      </div>
    </div>
  )
}

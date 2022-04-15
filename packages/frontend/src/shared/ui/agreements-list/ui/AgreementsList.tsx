import { Owners, Tenants } from '@widgets/documents-agreements'
import style from './Agreements.module.scss'

export function AgreementsList (): |JSX.Element {
  return (
    <div className={ style['container'] }>
      <Tenants title="Арендаторам" />
      <Owners title="Собственникам" />
    </div>
  )
}

import style from './O&T.module.scss'

export function Tenants ({ title }: {title: string}): JSX.Element {
  return (
    <div>
      <h3 className={ style['title-container'] }>
        {title}
      </h3>

      <div className={ style['list-container'] } />
    </div>
  )
}

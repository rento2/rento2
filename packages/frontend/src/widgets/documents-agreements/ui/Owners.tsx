import style from './O&T.module.scss'

export function Owners ({ title }: {title: string}): JSX.Element {
  return (
    <div>
      <p className={ style['title-container'] }>
        {title}
      </p>
      <div className={ style['list-container'] } />

    </div>
  )
}

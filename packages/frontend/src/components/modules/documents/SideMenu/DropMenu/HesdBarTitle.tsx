import style from './HeadBar.module.scss'

const HeadBarTitle = (): JSX.Element => {
  return (
    <button className={ style['title'] }>
      <p className={ style['title__text'] }>
        Частые вопросы
      </p>
    </button>
  )
}
export default HeadBarTitle

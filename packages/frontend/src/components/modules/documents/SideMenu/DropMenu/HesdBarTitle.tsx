import style from './HeadBar.module.scss'

const HeadBarTitle = ({ btnOnClick }: {btnOnClick: () => any}): JSX.Element => {
  return (
    <button className={ style['title'] }
      onClick={ btnOnClick }
    >
      <p className={ style['title__text'] }>
        Частые вопросы
      </p>
    </button>
  )
}
export default HeadBarTitle

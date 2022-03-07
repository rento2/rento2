import classNames from 'classnames'
import style from './HeadBar.module.scss'

const HeadBarTitle = ({ btnOnClick }: {btnOnClick: () => any}): JSX.Element => {
  return (
    <button className={ classNames(style['title'], style['title__text']) }
      onClick={ btnOnClick }
    >
      Частые вопросы
    </button>
  )
}
export default HeadBarTitle

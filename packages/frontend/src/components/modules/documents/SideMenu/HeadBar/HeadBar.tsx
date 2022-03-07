import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { IPropsMenu } from '../type/IPropsMenu'
import HeadBarItem from './HeadBarItems'
import HeadBarTitle from './HeadBarTitle'
import style from './HeadBar.module.scss'
import FocusLock from 'react-focus-lock'

const HeadBar = ({ dataMenu }: {dataMenu: IPropsMenu[]}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [desable, setDesable] = useState(false)

  const btnOnClick = (): void => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = 'hidden' } else {
      document.body.style.overflow = 'scroll'
    }
  }, [isOpen])

  useEffect(() => {
    setDesable(!desable)
  }, [isOpen])
  return (
    <FocusLock autoFocus={ false }
      disabled={ desable }
    >
      <div className={ classNames(isOpen ? style['wrapper-box'] : style['bg-none']) }>

        <HeadBarTitle btnOnClick={ btnOnClick } />

        <div className={ classNames((!isOpen) ? style['h0'] : style['open']) }>

          { dataMenu.map((item, idx) => (
            <HeadBarItem key={ idx }
              data={ item }
            />)) }

        </div>

        <div className={ classNames(isOpen ? style['dark'] : '') }
          onClick={ () => btnOnClick() }
        />
      </div>
    </FocusLock>
  )
}
export default HeadBar

import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { HeadMenuItem } from './HeadMenuItems'
import { HeadMenuTitle } from './HeadMenuTitle'
import FocusLock from 'react-focus-lock'
import { dataMenu } from '@widgets/documents-side-menu/model/dataMenu'
import style from './HeadMenu.module.scss'

export const HeadMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [disable, setDisable] = useState(false)

  const btnOnClick = (): void => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = 'hidden' } else {
      document.body.style.overflow = 'scroll'
    }
  }, [isOpen])

  useEffect(() => {
    setDisable(!disable)
  }, [isOpen])
  return (
    <FocusLock autoFocus={ false }
      disabled={ disable }
    >
      <div className={ classNames(isOpen ? style['wrapper-box'] : style['bg-none']) }>

        <HeadMenuTitle
          btnOnClick={ btnOnClick }
          data={ dataMenu }
          isOpen={ isOpen }
        />

        <ul className={ classNames((!isOpen) ? style['h0'] : style['open']) }>

          { dataMenu.map((item, idx) => (
            <HeadMenuItem key={ idx }
              data={ item }
            />)) }

        </ul>

        <div className={ classNames(isOpen ? style['dark'] : '') }
          onClick={ () => btnOnClick() }
        />
      </div>
    </FocusLock>
  )
}

import { IPropsAgreements, IPropsMenu } from '@widgets/documents-side-menu'
import { HeadMenuItem } from './HeadMenuItems'
import { HeadMenuTitle } from './HeadMenuTitle'
import { useEffect, useState } from 'react'
import FocusLock from 'react-focus-lock'
import classNames from 'classnames'
import style from './HeadMenu.module.scss'

export const HeadMenu = ({ data }: {data: IPropsMenu[] | IPropsAgreements}): JSX.Element => {
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

        {(Array.isArray(data))
          ? (
            <>
              <HeadMenuTitle
                btnOnClick={ btnOnClick }
                data={ data }
                isOpen={ isOpen }
              />
              <ul className={ classNames((!isOpen) ? style['h0'] : style['open']) }>
                {data.map((item, idx) => (
                  <HeadMenuItem key={ idx }
                    data={ item }
                  />))}
              </ul>
            </>
            )
          : (
            <>
              <HeadMenuTitle
                btnOnClick={ btnOnClick }
                chapter={ data.chapter }
                data={ data.listMenu }
                isOpen={ isOpen }
              />
              <ul className={ classNames((!isOpen) ? style['h0'] : style['open']) }>
                { data.listMenu.map((item, idx) => (
                  <HeadMenuItem key={ idx }
                    data={ item }
                  />
                ))}
              </ul>
            </>
            )

}
        <div className={ classNames(isOpen ? style['dark'] : '') }
          onClick={ () => btnOnClick() }
        />
      </div>
    </FocusLock>
  )
}

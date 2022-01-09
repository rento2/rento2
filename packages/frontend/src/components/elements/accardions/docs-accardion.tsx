import React, { FunctionComponent, useState } from 'react'
import { stateAcardionProps } from './stateAcardion'
import style from './docs-accardion.module.scss'
import AccardionButton from '../buttons/AccardionButton'

interface DocAcardionProps {
  state: stateAcardionProps[]
}

const DocAcardion: FunctionComponent<DocAcardionProps> = (
  props: DocAcardionProps
) => {
  const [isActive, setIsActive] = useState(false)
  const open: () => void = () => {
    setIsActive(!isActive)
  }
  return (
    <div className={style['wrapper-box']}>
      {props.state.map((i, index) => (
        <div key={index} className={style['wrapper-ul']}>
          <ul className={style['wrapper-list']}>
            <li className={style['item-title']}>
              <div className={style['item-button']} onClick={open}>
                <AccardionButton />
              </div>
              {i.title}
            </li>
            <li className={style['item-description']}>{i.description} </li>
          </ul>
        </div>
      ))}
    </div>
  )
}
export default DocAcardion

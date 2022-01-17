import React, { FunctionComponent, useState } from 'react'
import { stateAcardionProps } from './StateAccordion'
import style from './Docs-accordion.module.scss'
import AccardionButton from '@elements/buttons/AccordionButton/AccordionButton'

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
      {props.state.map((data, index) => (
        <div key={index} className={style['wrapper-ul']}>
          <ul className={style['wrapper-list']}>
            <li className={style['item-title']}>
              <div className={style['item-button']} onClick={open}>
                <AccardionButton />
              </div>
              <h2 className={style['item-text-title']}>
                {data.title}
              </h2>
            </li>
            <li className={style['item-description']}>{data.description} </li>
          </ul>
        </div>
      ))}
    </div>
  )
}
export default DocAcardion

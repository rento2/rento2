/* eslint-disable import/no-absolute-path */
import { FunctionComponent, useState } from 'react'
import { IAcardionProps } from './types/IAccordionPrors'
import style from './DocsAccordion.module.scss'
import AccardionIcon from '@elements/icons/AccordionIcon'

interface DocAcardionProps {
  state: IAcardionProps[]
}

const DocAcardion: FunctionComponent<DocAcardionProps> = (
  props: DocAcardionProps
) => {
  const [click, setClick] = useState(-1)

  const openDescription = (index: number): any => {
    if (click === index) {
      return setClick(-1)
    }
    setClick(index)
  }

  return (
    <div className={ style['wrapper-box'] }>
      {props.state.map((data, index) => (
        <div key={ index + 1 }
          className={ style['wrapper-ul'] }
        >
          <ul className={ style['wrapper-list'] }>
            <li className={ style['item-title'] }>
              <div
                key={ index }
                className={ [style['item-button'],
                  style[click === index ? 'active' : '']].join(' ') }
                onClick={ () => openDescription(index) }
              >
                <AccardionIcon />
              </div>
              <h2 className={ style['item-text-title'] }>
                {data.title}
              </h2>
            </li>
            {click === index
              ? (
                <li className={ style['item-description'] }>
                  {data.description}
                  {' '}
                </li>
                )
              : (
                <li className={ style['hidden-item'] }>
                  {data.description}
                  {' '}
                </li>
                )}
          </ul>
        </div>
      ))}
    </div>
  )
}
export default DocAcardion

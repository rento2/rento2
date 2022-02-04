/* eslint-disable react/jsx-indent */
import { IAccordionProps } from './types/IAccordionPrors'
import style from './Accordion.module.scss'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import IconAccordion from '@elements/icons/IconAccordion'

function AccordionItem ({
  state,
  isOpen,
  btnOnclick,
  index
}: {
  state: IAccordionProps
  isOpen: boolean
  btnOnclick: () => void
  index: number
}): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement
      setHeight(contentEl.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isOpen])

  return (
    <li className={ classNames(style['wrapper-ul']) }>
        <h3>
      <button className={ style['item-title'] }
        onClick={ btnOnclick }
      >
        {index}
          {state.title}
        <div className={ classNames(style['item-button'], isOpen ? style['active'] : '') }>
          <IconAccordion />
        </div>
      </button>
        </h3>
      <div className={ style['item-container'] }
        style={ { height } }
      >
        { isOpen &&
          (<h4 ref={ contentRef }
            className={ classNames(style['item-description'], isOpen ? style['pause'] : '') }
          >
            {state.description}
           </h4>) }

      </div>
    </li>
  )
}

export default AccordionItem

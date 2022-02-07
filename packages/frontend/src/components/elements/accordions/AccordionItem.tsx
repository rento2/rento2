/* eslint-disable react/jsx-indent */
import { IAccordionProps } from './types/IAccordionPrors'
import style from './Accordion.module.scss'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import IconAccordion from '@elements/icons/IconAccordion'

function AccordionItem ({
  state,
  isOpen,
  btnOnclick
}: {
  state: IAccordionProps
  isOpen: boolean
  btnOnclick: () => void
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
          {state.title}
        <div className={ classNames(style['item-button'], isOpen ? style['active'] : '') }>
          <IconAccordion />
        </div>
      </button>
        </h3>
      <div className={ classNames(style['item-container'], isOpen ? style['mb'] : '') }
        style={ { height } }
      >
        { isOpen
          ? (
          <h4 ref={ contentRef }
            className={ classNames(style['item-description']) }

          >
            {state.description}
          </h4>
            )
          : (
         <h4
           className={ classNames(style['item-description-closed']) }
         >
            {state.description}
         </h4>
            )}

      </div>
    </li>
  )
}

export default AccordionItem

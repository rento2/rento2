import { IAccordionProps } from './types/IAccordionPrors'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import style from './Accordion.module.scss'

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
    <li className={ classNames(style['item']) }>
      <h3>
        <button className={ classNames(style['item-title'], isOpen ? style['active'] : '') }
          type='button'
          onClick={ btnOnclick }
        >
          <p className={ style['item-p'] }>
            {state.title}
          </p>
        </button>
      </h3>
      <div className={ classNames(style['item-container']) }
        style={ { height } }
      >
        <p ref={ contentRef }
          className={ classNames(style['item-description'], isOpen ? style['item-description-open'] : style['item-description-closed']) }
        >
          {state.description}
        </p>
      </div>
    </li>
  )
}

export default AccordionItem

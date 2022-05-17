import { IAccordionProps } from './types/IAccordionPrors'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import styles from './Accordion.module.scss'

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
    <li className={ classNames(styles['item']) }>
      <h3>
        <button className={ classNames(styles['item-title'], isOpen ? styles['active'] : '') }
          type='button'
          onClick={ btnOnclick }
        >
          <span className={ styles['item-p'] }>
            {state.title}
          </span>
          <span className={ styles['item-title__closed-btn'] } />
        </button>
      </h3>
      <div className={ classNames(styles['item-container']) }
        style={ { height } }
      >
        <p ref={ contentRef }
          className={ classNames(styles['item-description'], isOpen ? styles['item-description-open'] : styles['item-description-closed']) }
        >
          {state.description}
        </p>
      </div>
    </li>
  )
}
export default AccordionItem

import AccordionItem from './AccordionItem'
import { IAccordionProps } from './types/IAccordionPrors'
import style from './Accordion.module.scss'
import { useState } from 'react'

interface IAccordionList{
  state: IAccordionProps[]
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function AccordionList (state: IAccordionList) {
  const [currentIdx, setCurrentIdx] = useState(-1)
  const btnOnClick = (idx: number): void => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1))
  }

  return (
    <ul className={ style['wrapper-ul'] }>
      {
        state.state.map((item, idx) => (<AccordionItem
          key={ idx }
          btnOnclick={ () => btnOnClick(idx) }
          index={ idx + 1 }
          isOpen={ idx === currentIdx }
          state={ item }
        />))}
    </ul>
  )
}

export default AccordionList

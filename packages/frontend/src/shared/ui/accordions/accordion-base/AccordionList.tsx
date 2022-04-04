import AccordionItem from './AccordionItem'
import { IAccordionProps } from './types/IAccordionPrors'
import { useState } from 'react'

interface IAccordionList{
  state: IAccordionProps[]
}

function AccordionList (state: IAccordionList, styleName: string): JSX.Element {
  const [currentIdx, setCurrentIdx] = useState(-1)
  const btnOnClick = (idx: number): void => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1))
  }

  return (
    <ul className={ styleName }>
      {
        state.state.map((item, idx) => (<AccordionItem
          key={ idx }
          btnOnclick={ () => btnOnClick(idx) }
          isOpen={ idx === currentIdx }
          state={ item }
        />))}
    </ul>
  )
}

export default AccordionList

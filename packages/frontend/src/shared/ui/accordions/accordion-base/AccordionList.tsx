import AccordionItem from './AccordionItem'
import { IAccordionProps } from './types/IAccordionPrors'
import { useState } from 'react'

interface IAccordionList{
  state: IAccordionProps[]
  styleName?: string
}

export function AccordionList ({ state, styleName }: IAccordionList): JSX.Element {
  const [currentIdx, setCurrentIdx] = useState(-1)
  const btnOnClick = (idx: number): void => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1))
  }

  return (
    <ul className={ styleName }>
      {
        state.map((item, idx) => (<AccordionItem
          key={ idx }
          btnOnclick={ () => btnOnClick(idx) }
          isOpen={ idx === currentIdx }
          state={ item }
        />))}
    </ul>
  )
}

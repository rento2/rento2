import AccordionItem from './AccordionItem'
import { IAcordionProps } from './types/IAccordionPrors'

interface IAccordionList{
  state: IAcordionProps[]
}

function AccordionList (state: IAccordionList): JSX.Element {
  return (
    <ul>
      {
        state.state.map((item, idx) => (<AccordionItem key={ idx }
          state={ item }
        />))}
    </ul>
  )
}

export default AccordionList

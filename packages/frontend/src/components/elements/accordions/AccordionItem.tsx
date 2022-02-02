
import AccardionIcon from '@elements/icons/AccordionIcon'
import { IAcordionProps } from './types/IAccordionPrors'

interface IAccordionItem{
  state: IAcordionProps
}

function AccordionItem (state: IAccordionItem): JSX.Element {
  return (
    <li>
      <button>
        <h3>
          {state.state.title}
        </h3>
        <div>
          <AccardionIcon />
        </div>

      </button>
      <div>
        <div>
          {state.state.description}
        </div>

      </div>
    </li>
  )
}

export default AccordionItem

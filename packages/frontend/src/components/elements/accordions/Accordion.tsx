import { FunctionComponent } from 'react'
import { IAccordionProps } from './types/IAccordionPrors'
import AccordionList from './AccordionList'
import style from './Accordion.module.scss'

interface AcordionProps {
  state: IAccordionProps[]
}

const Accordion: FunctionComponent<AcordionProps> = (
  state: AcordionProps
) => {
  return (
    <div className={ style['wrapper-box'] }>
      <AccordionList state={ state.state } />
    </div>

  )
}
export default Accordion

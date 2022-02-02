import { FunctionComponent } from 'react'
import { IAcordionProps } from './types/IAccordionPrors'
import AccordionList from './AccordionList'

interface AcordionProps {
  state: IAcordionProps[]
}

const Acardion: FunctionComponent<AcordionProps> = (
  state: AcordionProps
) => {
  return (
    <AccordionList state={ state.state } />

  )
}
export default Acardion

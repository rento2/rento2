import AccordionItem from './AccordionItem'
import { IAccordionProps, IDataProps } from './types/IAccordionPrors'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

interface IAccordionList{
  state: IAccordionProps[]
  styleName?: string
}

export function AccordionList ({ state, styleName }: IAccordionList): JSX.Element {
  const [currentIdx, setCurrentIdx] = useState(-1)
  const [pageState, setPageState] = useState<IDataProps[]>()
  const router = useRouter()

  useEffect(() => {
    state.forEach((i) => {
      if (router.asPath === i.URLpath) {
        setPageState(i.date)
      }
    })
  }, [router.asPath, state])

  const btnOnClick = (idx: number): void => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1))
  }
  return (
    <ul className={ styleName }>
      {
      pageState?.map((item, idx) => (<AccordionItem
        key={ idx }
        btnOnclick={ () => btnOnClick(idx) }
        isOpen={ idx === currentIdx }
        state={ item }
      />))}
    </ul>
  )
}

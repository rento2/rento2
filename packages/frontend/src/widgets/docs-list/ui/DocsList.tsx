import { useRef, useState } from 'react'
import { DocsListItem } from './list-item/DocsListItem'
import { IListProps } from '../lib/types/IListProps'

export const DocsList = (props: {items: IListProps[]}): JSX.Element => {
  const listItemRef = useRef<HTMLElement>(null)
  const [currentIdx, setCurrentIdx] = useState(-1)
  const btnOnClick = (idx: number): void => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1))
  }
  return (
    <>
      {props.items.map((listItem: IListProps, idx: number) => (
        <DocsListItem
          key={ idx }
          ref={ listItemRef }
          { ...listItem }
          btnOnclick={ () => btnOnClick(idx) }
          isOpen={ idx === currentIdx }
        />
      ))}
    </>
  )
}

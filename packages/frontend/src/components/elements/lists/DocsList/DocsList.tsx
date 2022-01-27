import { useRef } from 'react'
import { DocsListItem } from './DocsListItem'
import { IListProps } from './types/IListProps'

export const DocsList = (props: {items: IListProps[]}): JSX.Element => {
  const listItemRef = useRef<HTMLElement>(null)
  return (
    <>
      {props.items.map((listItem: IListProps, index: number) => (
        <DocsListItem
          key={ `${listItem.type}-${index}` }
          ref={ listItemRef }
          { ...listItem }
        />
      ))}
    </>
  )
}

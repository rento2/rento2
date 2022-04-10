/* eslint-disable react/prop-types */
import { forwardRef, Ref, useRef, useState } from 'react'
import { IListProps } from '@widgets/docs-list/lib/types/IListProps'
import classNames from 'classnames'
import { ITagName } from '@widgets/docs-list/lib/types/ITagName'
import styles from './DocsListItem.module.scss'
import { DocsListItemAfter } from './DocsListItemAfter'

let isOpen = false

// TODO
// Если уберется контекст или же будет необходимость использовать контекст в  этом компоненте, то лучше вместо AgreementShortButton использовать базовую кнопку, а в нее просто передать необходимый метод при клике по кнопке
export const DocsListItem = forwardRef<HTMLElement, IListProps>(
  (
    {
      type,
      classItem,
      text,
      button,
      contents,
      as

    },
    ref: Ref<HTMLElement>
  ): JSX.Element => {
    const tagName: ITagName = {
      list: 'ol',
      item: 'li',
      title: 'h3',
      description: 'span'
    }

    const Component = as ?? tagName[type]

    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    const btnOnclick: () => void = () => {
      if (height === 0) isOpen = true; else isOpen = false
      if (isOpen) {
        const contentEl = contentRef.current as HTMLDivElement
        setHeight(contentEl.scrollHeight)
      } else {
        setHeight(0)
      }
    }

    return (
      <>
        { type === 'title'
          ? (
            <div className={ classNames(styles['item']) }>
              <h3>
                <button className={ classNames(styles['item-title'], isOpen ? styles['active'] : '') }
                  onClick={ btnOnclick }
                >
                  {text != null && button == null
                    ? (
                      <div className={ classNames(styles['item-p']) }>
                        <Component ref={ ref }
                          className={ classNames(styles[classItem ?? '']) }
                        >
                          {text}
                        </Component>
                      </div>

                      )
                    : null}
                </button>
              </h3>
              {Array.isArray(contents)
                ? (
                  <div className={ classNames(styles['item-container']) }
                    style={ { height } }
                  >
                    <div ref={ contentRef }
                      className={ classNames(styles['item-description'], isOpen ? styles['item-description-open'] : styles['item-description-closed']) }
                    >

                      {contents.map((listItem: IListProps, index: number) => (
                        <DocsListItemAfter
                          key={ `${listItem.type}-${index}` }
                          { ...listItem }
                        />
                      ))}
                    </div>
                  </div>
                  )

                : null}
            </div>

            )
          : null}

        {Array.isArray(contents) && type !== 'title'
          ? (
            <Component ref={ ref }
              className={ classNames(styles[classItem ?? '']) }
            >
              {contents.map((listItem: IListProps, index: number) => (
                <DocsListItem
                  key={ `${listItem.type}-${index}` }
                  ref={ ref }
                  { ...listItem }
                />
              ))}
            </Component>
            )
          : null}
      </>
    )
  })

DocsListItem.displayName = 'DocsListItem'

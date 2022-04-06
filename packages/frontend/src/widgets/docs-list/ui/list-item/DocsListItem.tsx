/* eslint-disable react/prop-types */
import { forwardRef, Ref, useContext, useEffect, useRef, useState } from 'react'
import { IListProps } from '@widgets/docs-list/lib/types/IListProps'
import classNames from 'classnames'
import { ITagName } from '@widgets/docs-list/lib/types/ITagName'
import styles from './DocsListItem.module.scss'
import { DocsListContext } from '@widgets/docs-list/model/DocsListContext'
import { DocsListItem2 } from './DocsListItem2'

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
      as,
      btnOnclick,
      isOpen
    },
    ref: Ref<HTMLElement>
  ): JSX.Element => {
    const { setShownPriceDamage, setShownRules } = useContext(DocsListContext)
    const tagName: ITagName = {
      list: 'ol',
      item: 'li',
      title: 'h3',
      description: 'span'
    }

    const Component = as ?? tagName[type]
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)
    useEffect(() => {
      if (isOpen) {
        const contentEl = contentRef.current as HTMLDivElement
        setHeight(contentEl.scrollHeight)
      } else {
        setHeight(0)
      }
    }, [isOpen])

    let count = -1

    if (text != null && button == null) { count = count + 1; console.log(text) }

    return (
      <>
        {text != null && button == null
          ? (
            <div className={ classNames(styles['item']) }>
              <h3>
                <button className={ classNames(styles['item-title'], isOpen ? styles['active'] : '') }
                  onClick={ btnOnclick }
                >
                  <Component ref={ ref }
                    className={ classNames(styles[classItem ?? '']) }
                  >
                    {text}
                  </Component>
                </button>
              </h3>

            </div>
            )

          : null}

        {text != null && button != null
          ? (
            <Component ref={ ref }
              className={ classNames(styles[classItem ?? '']) }
            >
              {text}
              {' '}
              <button className={ classNames(styles[button.classButton]) }
                type='button'
                onClick={ button.buttonType === 'modalPriceDamage' ? setShownPriceDamage : setShownRules }
              >
                {button.buttonText}
              </button>
            </Component>
            )
          : null}
        {/* {Array.isArray(contents) && count === 0
          ? (
            <div className={ classNames(styles['item-container']) }
              style={ { height } }
            >
              <div ref={ contentRef }
                className={ classNames(styles['item-description'], isOpen ? styles['item-description-open'] : styles['item-description-closed']) }
              >
                (
                <Component ref={ ref }
                  className={ classNames(styles[classItem ?? '']) }
                >
                  {contents.map((listItem: IListProps, index: number) => (
                    <DocsListItem2
                      key={ `${listItem.type}-${index}` }
                      ref={ ref }
                      { ...listItem }
                    />
                  ))}
                </Component>
                )
              </div>
            </div>
            )

          : null} */}
        {Array.isArray(contents) && count !== 0
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

/* eslint-disable react/prop-types */
import { forwardRef, Ref, useState, useRef, useContext, useEffect, useMemo } from 'react'
import { IListProps } from '@widgets/docs-list/lib/types/IListProps'
import classNames from 'classnames'
import { ITagName } from '@widgets/docs-list/lib/types/ITagName'
import styles from './DocsListItem.module.scss'
import { DocsListContext } from '@widgets/docs-list/model/DocsListContext'

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
    const [isOpen, setIsOpen] = useState(false)

    const btnOnclick: () => void = () => {
      setIsOpen(!isOpen)
    }

    useEffect(() => {
      if (isOpen) {
        const contentEl = contentRef.current as HTMLDivElement
        setHeight(contentEl.scrollHeight)
      } else {
        setHeight(0)
      }
    }, [isOpen])

    const styleOpen = useMemo((): string | undefined => {
      return isOpen ? styles['item-description-open'] : styles['item-description-closed']
    }, [isOpen])

    return (
      <>
        { type === 'title'
          ? (
            <>
              <button className={ classNames(styles['item-title'], isOpen ? styles['active'] : '') }
                onClick={ btnOnclick }
              >
                <Component ref={ ref }
                  className={ classNames(styles[classItem ?? '']) }
                >
                  {text}
                </Component>

              </button>

              {Array.isArray(contents)
                ? (contents.map((listItem: IListProps, index: number) => (
                  <div key={ `${listItem.type}-${index}` }
                    className={ classNames(styles['item-container']) }
                    style={ { height } }
                  >
                    <div ref={ contentRef }
                      className={ classNames(styles['item-description'], styleOpen) }
                    >
                      <DocsListItem
                        ref={ ref }
                        { ...listItem }
                      />
                    </div>
                  </div>
                  )))
                : null}
            </>
            )
          : null}

        {text != null && button == null && type !== 'title'
          ? (
            <Component ref={ ref }
              className={ classNames(styles[classItem ?? '']) }
            >
              {text}
            </Component>
            )
          : null}

        {text != null && button != null && type !== 'title'
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

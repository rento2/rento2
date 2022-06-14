import { forwardRef, Ref, useState, useRef, useContext, useEffect, useMemo } from 'react'
import classNames from 'classnames'
import { ITagName } from '@widgets/docs-list/lib/types/ITagName'
import styles from './DocsListItem.module.scss'
import { DocsListContext } from '@widgets/docs-list/model/DocsListContext'

interface IListProps {
  type: keyof ITagName
  classItem?: string
  text?: string
  button?: {
    buttonText: string
    classButton: string
    buttonType: string
  }
  contents?: IListProps[]
  as?: React.ElementType // Этот тип если нужно будет передать тег или компонент через пропс

}

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
      description: 'span',
      text: 'div'
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
      return isOpen ? styles['item__description-open'] : styles['item__description-closed']
    }, [isOpen])

    return (
      <>
        { type === 'title'
          ? (
            <>
              <Component ref={ ref }
                className={ classNames(styles[classItem ?? '']) }
              >
                <button className={ classNames(styles['item__title'], isOpen ? styles['active'] : '') }
                  onClick={ btnOnclick }
                >
                  {text}
                </button>
              </Component>

              {Array.isArray(contents)
                ? (contents.map((listItem: IListProps, index: number) => (
                  <div key={ `${listItem.type}-${index}` }
                    className={ classNames(styles['item__container']) }
                    style={ { height } }
                  >
                    <div ref={ contentRef }
                      className={ classNames(styles['item__description'], styleOpen) }
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

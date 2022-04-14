/* eslint-disable react/prop-types */
import { forwardRef, Ref, useContext } from 'react'
import { IListProps } from '@widgets/docs-list/lib/types/IListProps'
import classNames from 'classnames'
import { ITagName } from '@widgets/docs-list/lib/types/ITagName'
import styles from './DocsListItem.module.scss'
import { DocsListContext } from '@widgets/docs-list/model/DocsListContext'

// TODO
// Если уберется контекст или же будет необходимость использовать контекст в  этом компоненте, то лучше вместо AgreementShortButton использовать базовую кнопку, а в нее просто передать необходимый метод при клике по кнопке
export const DocsListItemAfter = forwardRef<HTMLElement, IListProps>(
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

    return (
      <>
        {text != null && button == null
          ? (
            <Component ref={ ref }
              className={ classNames(styles[classItem ?? '']) }
            >
              {text}
            </Component>
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

        {Array.isArray(contents)
          ? (
            <Component ref={ ref }
              className={ classNames(styles[classItem ?? '']) }
            >
              {contents.map((listItem: IListProps, index: number) => (
                <DocsListItemAfter
                  key={ `${listItem.type}-${index - 1}` }
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

DocsListItemAfter.displayName = 'DocsListItemAfter'
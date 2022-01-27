/* eslint-disable react/prop-types */
import { forwardRef, Ref } from 'react'
import { IListProps } from './types/IListProps'
import classNames from 'classnames'
import { AgreementShortButton } from '@modules/docs/AgreementShort/AgreementShortButton'
import { ITagName } from './types/ITagName'
import styles from '@modules/docs/AgreementShort.module.scss'

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

    return (
      <>
        {text != null && button == null
        // @ts-expect-error
          ? (
            <Component ref={ ref }
              className={ classNames(styles[classItem]) }
            >
              {text}
            </Component>
            )
          : null}

        {text != null && button != null
          ? (
        // @ts-expect-error
            <Component ref={ ref }
              className={ classNames(styles[classItem]) }
            >
              {text}
              {' '}
              <AgreementShortButton buttonType={ button.buttonType }
                classProps={ classNames(styles[button.classButton]) }
                textProps={ button.buttonText }
              />
            </Component>
            )
          : null}

        {Array.isArray(contents)
          ? (
        // @ts-expect-error
            <Component ref={ ref }
              className={ classNames(styles[classItem]) }
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

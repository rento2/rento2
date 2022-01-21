import { forwardRef, Ref } from 'react'
import { IListProps } from './types/IListProps'
import classNames from 'classnames'
import { AgreementShortButton } from '@modules/docs/AgreementShort/AgreementShortButton'
import { ITagName } from './types/ITagName'
import styles from '@modules/docs/AgreementShort.module.scss'

// TODO
// Если уберется контекст или же будет необходимость использовать контекст в  этом компоненте, то лучше вместо AgreementShortButton использовать базовую кнопку, а в нее просто передать необходимый метод при клике по кнопке
export const DocsListItem = forwardRef<HTMLElement, IListProps>((props, ref: Ref<HTMLElement>): JSX.Element => {
  const tagName: ITagName = {
    list: 'ol',
    item: 'li',
    title: 'h3',
    description: 'span'
  }

  const Component = props?.as ?? tagName[props.type]
  return (
    <>
      {props.text != null && props.button == null
        // @ts-expect-error
        ? <Component ref={ref} className={classNames(styles[props?.class ?? ''])}>{props.text}</Component>
        : null}

      {props.text != null && props.button != null
        ? (
          // @ts-expect-error
          <Component ref={ref} className={classNames(styles[props?.class ?? ''])}>
            {props.text} <AgreementShortButton textProps={props.button.buttonText} classProps={classNames(styles[props.button.classButton])} buttonType={props.button.buttonType} />
          </Component>
        )
        : null}

      {Array.isArray(props.contents) ? (
        // @ts-expect-error
        <Component ref={ref} className={classNames(styles[props?.class ?? ''])}>
          {props.contents.map((listItem: IListProps, index: number) => (
            <DocsListItem
              ref={ref}
              key={`${listItem.type}-${index}`}
              {...listItem}
            />
          ))}
        </Component>
      ) : null}
    </>
  )
})

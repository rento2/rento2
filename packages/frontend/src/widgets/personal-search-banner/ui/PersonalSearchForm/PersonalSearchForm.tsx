import { ButtonIcon, IconClose, ModalBase } from '@shared/ui'
import classNames from 'classnames'

import styles from './PersonalSearchForm.module.scss'

interface IPersonalSearchForm {
  isShown: boolean
  onClose: () => void
}

export function PersonalSearchForm ({ isShown, onClose }: IPersonalSearchForm): JSX.Element {
  const modalHeaderContent = (
    <div className={ classNames(styles['header']) }>
      <ButtonIcon
        background='none'
        full='stroke'
        size='32'
        onClick={ onClose }
      >
        <IconClose figure='square' />
      </ButtonIcon>
    </div>
  )

  const formContent = (
    <form>
      <p>
        Оставьте заявку, и мы начнём поиск уже сегодня
      </p>
    </form>
  )

  return (
    <ModalBase
      bodyContent={ formContent }
      classes={ {
        content: classNames(styles['content']),
        body: classNames(styles['body']),
        dialog: classNames(styles['dialog'])
      } }
      headerContent={ modalHeaderContent }
      hide={ onClose }
      isShown={ isShown }
      labelledbyText='PersonalSearchForm'
    />
  )
}

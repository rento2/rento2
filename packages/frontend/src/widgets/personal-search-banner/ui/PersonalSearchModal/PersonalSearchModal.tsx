import { ButtonGeneral, ButtonIcon, IconClose, ModalBase } from '@shared/ui'
import classNames from 'classnames'
import Image from 'next/image'
import styles from './PersonalSearchModal.module.scss'
import image from '../../images/key-image.svg'

interface IPersonalSearchModal {
  isShown: boolean
  onClose: () => void
  showForm: () => void
}

export function PersonalSearchModal ({ isShown, onClose, showForm }: IPersonalSearchModal): JSX.Element {
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

  const modalContent = (
    <>
      <div className={ classNames(styles['headline']) }>
        <h3 className={ classNames(styles['title']) }>
          Поможем найти хорошую квартиру по вашим параметрам
        </h3>
        <Image src={ image } />
      </div>
      <ul className={ classNames(styles['list']) }>
        <li className={ classNames(styles['item']) }>
          <p className={ classNames(styles['item-title']) }>
            <div className={ classNames(styles['item-bullet']) } />
            Действительно удобно
          </p>
          <p className={ classNames(styles['item-paragraph']) }>
            Находим жемчужины и отправляем их вам в мессенджер ежедневно
          </p>
        </li>
        <li className={ classNames(styles['item']) }>
          <p className={ classNames(styles['item-title']) }>
            <div className={ classNames(styles['item-bullet']) } />
            В ваших интересах
          </p>
          <p className={ classNames(styles['item-paragraph']) }>
            Едем с вами на просмотр, торгуемсяс собственником за лучшие условияи составляем договор.
          </p>
        </li>
        <li className={ classNames(styles['item']) }>
          <p className={ classNames(styles['item-title']) }>
            <div className={ classNames(styles['item-bullet']) } />
            Чувствуйте себя как дома
          </p>
          <p className={ classNames(styles['item-paragraph']) }>
            Перед вашим въездом проведём генеральную уборку и позовём хоум-мастера.
          </p>
        </li>
        <li className={ classNames(styles['item']) }>
          <p className={ classNames(styles['item-title']) }>
            <div className={ classNames(styles['item-bullet']) } />
            Новоселье с гарантией
          </p>
          <p className={ classNames(styles['item-paragraph']) }>
            Оплата после заключения договора. Если в течение года что-то идёт не так, найдём вам новый дом бесплатно
          </p>
        </li>

        <ButtonGeneral
          round
          font='l'
          height='56'
          onClick={ showForm }
        >
          Заказать поиск
        </ButtonGeneral>
      </ul>
    </>
  )

  return (
    <ModalBase
      bodyContent={ modalContent }
      classes={ {
        content: classNames(styles['content']),
        body: classNames(styles['body']),
        dialog: classNames(styles['dialog'])
      } }
      headerContent={ modalHeaderContent }
      hide={ onClose }
      isShown={ isShown }
      labelledbyText='PersonalSearchModal'
    />
  )
}

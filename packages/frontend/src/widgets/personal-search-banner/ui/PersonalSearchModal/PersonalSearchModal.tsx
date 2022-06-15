import { ButtonGeneral, ModalBase } from '@shared/ui'
import classNames from 'classnames'
import Image from 'next/image'
import styles from './PersonalSearchModal.module.scss'
import image from '../../images/key-image.svg'
import { useWindowDimensions } from '@shared/lib'

interface IPersonalSearchModal {
  isOpen: boolean
  onClose: () => void
  showForm: () => void
}

export function PersonalSearchModal ({ isOpen, onClose, showForm }: IPersonalSearchModal): JSX.Element {
  const { widthWindow } = useWindowDimensions()

  return (
    <ModalBase
      bodyClass={ classNames(styles['body']) }
      isOpen={ isOpen }
      onClose={ onClose }
    >
      <div className={ classNames(styles['headline']) }>
        <h3 className={ classNames(styles['title']) }>
          Поможем найти
          {' '}
          <span className={ classNames(styles['title_highlighted']) }>
            хорошую квартиру
          </span>
          {' '}
          по вашим параметрам
        </h3>
        <div className={ classNames(styles['image-wrapper']) }>
          <Image
            layout='fill'
            objectFit="cover"
            src={ image }
          />
        </div>
      </div>
      <ul className={ classNames(styles['list']) }>
        <li className={ classNames(styles['list-item']) }>
          <p className={ classNames(styles['list-item__title']) }>
            Действительно удобно
          </p>
          <p className={ classNames(styles['list-item__paragraph']) }>
            Находим жемчужины и отправляем их вам в мессенджер ежедневно
          </p>
        </li>
        <li className={ classNames(styles['list-item']) }>
          <p className={ classNames(styles['list-item__title']) }>
            В ваших интересах
          </p>
          <p className={ classNames(styles['list-item__paragraph']) }>
            Едем с вами на просмотр, торгуемсяс собственником за лучшие условияи составляем договор.
          </p>
        </li>
        <li className={ classNames(styles['list-item']) }>
          <p className={ classNames(styles['list-item__title']) }>
            Чувствуйте себя как дома
          </p>
          <p className={ classNames(styles['list-item__paragraph']) }>
            Перед вашим въездом проведём генеральную уборку и позовём хоум-мастера.
          </p>
        </li>
        <li className={ classNames(styles['list-item']) }>
          <p className={ classNames(styles['list-item__title']) }>
            Новоселье с гарантией
          </p>
          <p className={ classNames(styles['list-item__paragraph']) }>
            Оплата после заключения договора. Если в течение года что-то идёт не так, найдём вам новый дом бесплатно
          </p>
        </li>

        <ButtonGeneral
          round
          font='l'
          height={ widthWindow < 480 ? '44' : '56' }
          onClick={ showForm }
        >
          Заказать поиск
        </ButtonGeneral>
      </ul>
    </ModalBase>
  )
}

import { ButtonGeneral, ModalBase } from '@shared/ui'
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
      isOpen={ isOpen }
      onClose={ onClose }
    >
      <div className={ styles['body'] }>
        <div className={ styles['headline'] }>
          <h3 className={ styles['title'] }>
            Поможем найти
            {' '}
            <span className={ styles['title_highlighted'] }>
              хорошую квартиру
            </span>
            {' '}
            по вашим параметрам
          </h3>
          <div className={ styles['image-wrapper'] }>
            <Image
              layout='fill'
              objectFit="cover"
              src={ image }
            />
          </div>
        </div>
        <ul className={ styles['list'] }>
          <li className={ styles['list-item'] }>
            <p className={ styles['list-item__title'] }>
              Действительно удобно
            </p>
            <p className={ styles['list-item__paragraph'] }>
              Находим жемчужины и отправляем их вам в мессенджер
            </p>
          </li>
          <li className={ styles['list-item'] }>
            <p className={ styles['list-item__title'] }>
              В ваших интересах
            </p>
            <p className={ styles['list-item__paragraph'] }>
              Едем с вами на просмотр, торгуемсяс собственником за лучшие условияи составляем договор.
            </p>
          </li>
          <li className={ styles['list-item'] }>
            <p className={ styles['list-item__title'] }>
              Чувствуйте себя как дома
            </p>
            <p className={ styles['list-item__paragraph'] }>
              Перед вашим въездом проведём генеральную уборку и позовём хоум-мастера.
            </p>
          </li>
          <li className={ styles['list-item'] }>
            <p className={ styles['list-item__title'] }>
              Новоселье с гарантией
            </p>
            <p className={ styles['list-item__paragraph'] }>
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
      </div>
    </ModalBase>
  )
}

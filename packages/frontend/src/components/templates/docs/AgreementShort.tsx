import { ModalBase } from '@elements/modals/ModalBase/ModalBase'
import { useModal } from '@elements/modals/hooks/useModal'
import { AgreementShortModalHeader } from '@modules/docs/AgreementShortModal/AgreementShortModalHeader'
import { AgreementShortModalBody } from '@modules/docs/AgreementShortModal/AgreementShortModalBody'
import classNames from 'classnames'
import { ModalSwipe } from '@elements/modals/ModalSwipe/ModalSwipe'
import styles from './AgreementShort.module.scss'

export const AgreementShort = (): JSX.Element => {
  const [isShown, setShown] = useModal()
  const [isShown2, setShown2] = useModal()

  return (
    <div className='container'>
      <article className={styles['document__page']}>
        <h1 className={styles['document__heading']}>
          Договор оферта краткосрочной аренды квартиры
        </h1>
        <p className={styles['document__text-date']}>
          Обновление от 06.12.2021
        </p>
        <ol className={styles['document__list']}>
          <li className={styles['document__item']}>
            <h4 className={styles['document__title']}>
              Права и обязанности Сторон
            </h4>
            <ol className={styles['document__list-2']}>
              <li className={styles['document__item-2']}>
                Наймодатель обязуется:
                <ol className={styles['document__list-3']}>
                  <li className={styles['document__item-3']}>
                    Передать Нанимателю в состоянии, пригодном для проживания и отвечающем условиям Договора Квартиру, имущество, а также комплект ключей от входной двери Квартиры, а также предоставить дополнительные услуги, выбранные на Сайте и оплаченные Нанимателем.
                  </li>
                  <li className={styles['document__item-3']}>
                    Обеспечить свободный доступ Нанимателя и членов его семьи в жилое помещение.
                  </li>
                  <li className={styles['document__item-3']}>
                    Наймодатель оплачивает самостоятельно коммунальные платежи и иные платежи по содержанию Квартиры и имущества.
                  </li>
                  <li className={styles['document__item-3']}>
                    Наймодатель не несет ответственности за сохранность вещей, ценностей и документов Нанимателя, оставленных в Квартире, равно как припаркованных авто и других видов транспорта Нанимателя (временных жильцов).
                  </li>
                </ol>
              </li>
              <li className={styles['document__item-2']}>
                Наймодатель вправе:
                <ol className={styles['document__list-3']}>
                  <li className={styles['document__item-3']}>
                    Наймодатель имеет право периодически осматривать Квартиру, предупредив об этом Нанимателя за 2 часа.
                  </li>
                  <li className={styles['document__item-3']}>
                    Наймодатель вправе оставить у себя один комплект ключей.
                  </li>
                  <li className={styles['document__item-3']}>
                    Требовать от Нанимателя, и членов его семьи содержать жилое помещение в технически исправном и надлежащем состоянии в соответствии с требованиями, предъявляемыми действующим законодательством Российской Федерации, а также соблюдения Правил проживания в доме Наймодателя.
                  </li>
                  <li className={styles['document__item-3']}>
                    Требовать от Нанимателя освобождения жилого помещения по истечении срока настоящего Договора.
                  </li>
                  <li className={styles['document__item-3']}>
                    Требовать выплаты штрафов и компенсации ущерба, нанесенного Квартире и/или имуществу в Квартире в соответствии с Условиями о штрафах, расположенными на странице Сайта по адресу:
                    <button className={styles['document__btn-modal']} onClick={setShown}>
                      Прейскурант возмещения порчи имущества.
                    </button>
                    <ModalSwipe
                      labelledbyTextProps='Modal parent'
                      isShownProps={isShown}
                      handleHide={setShown}
                      modalHeaderProps={<AgreementShortModalHeader handleHide={setShown} />}
                      modalBodyProps={<AgreementShortModalBody />}
                      classes={{
                        dialog: classNames(styles['modal__dialog']),
                        body: classNames(styles['modal__body']),
                        header: classNames(styles['modal__header'])
                      }}
                    />
                  </li>
                  <li className={styles['document__item-3']}>
                    Требовать соблюдения Правил проживания, расположенными на странице Сайта по адресу:
                    <button className={styles['document__btn-modal']} onClick={setShown2}>
                      Правила проживания.
                    </button>
                    <ModalBase
                      isShown={isShown2}
                      hide={setShown2}
                      headerContent={<div><AgreementShortModalHeader handleHide={setShown2} /></div>}
                      bodyContent={<AgreementShortModalBody />}
                      labelledbyText='Price property damage'
                    />
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </article>
    </div>
  )
}

import FacebookIcon from '../../elements/icons/FacebookIcon'
import InstagramIcon from '../../elements/icons/InstagramIcon'
import TelegramIcon from '../../elements/icons/TelegramIcon'
import WhatsappIcon from '../../elements/icons/WhatsappIcon'
import styles from './Footer.module.scss'

export default function Footer (): JSX.Element {
  return (
    <footer className={styles['footer']}>
      <div className={[styles['footer__inner'], 'container'].join(' ')}>
        <ul className={styles['footer__list-document']}>
          <li className={styles['footer__item']}>
            <a className={styles['footer__link']} data-tag-manager='click-link' href='/documents/privacy' target='_blank'>
              Политика конфеденциальности
            </a>
          </li>
          <li className={styles['footer__item']}>
            <a className={styles['footer__link']} data-tag-manager='click-link' href='/documents/agreement-owners' target='_blank'>
              Образец договора
            </a>
          </li>
        </ul>
        <ul className={styles['footer__list-socials']}>
          <li className={styles['footer__item-socials']}>
            <a className={styles['footer__img-socials']} data-tag-manager='click-contacts-instagram' href='https://instagram.com/rento.one?utm_medium=copy_link' target='_blank' rel='noopener noreferrer' title='Instagram'>
              <InstagramIcon />
            </a>
          </li>
          <li className={styles['footer__item-socials']}>
            <a className={styles['footer__img-socials']} data-tag-manager='click-contacts-telegram' href='https://t.me/rento_one' target='_blank' rel='noopener noreferrer' title='Telegram'>
              <TelegramIcon />
            </a>
          </li>
          <li className={styles['footer__item-socials']}>
            <a className={styles['footer__img-socials']} data-tag-manager='click-contacts-whatsapp' href='https://wa.me/message/QS2O2VHMJW7IN1' target='_blank' rel='noopener noreferrer' title='Whatsapp'>
              <WhatsappIcon />
            </a>
          </li>
          <li className={styles['footer__item-socials']}>
            <a className={styles['footer__img-socials']} data-tag-manager='click-contacts-facebook' href='https://facebook.com/rento.one' target='_blank' rel='noopener noreferrer' title='Facebook'>
              <FacebookIcon />
            </a>
          </li>
        </ul>
        <ul className={styles['footer__list-contact']}>
          <li className={styles['footer__item']}>
            <a className={styles['footer__link']} data-tag-manager='click-contacts-phone' href='tel:+79660321763'>
              +7 (966) 032-17-63
            </a>
          </li>
          <li className={styles['footer__item']}>
            hello@rento.one
          </li>
        </ul>
      </div>
      <div className={styles['footer__address']}>
        <div className={[styles['footer__address-inner'], 'container'].join(' ')}>
          <p>
            ООО «Ренто»; ИНН 9709072210 КПП 770901001; 105120, г. Москва, Костомаровский пер 3с4
          </p>
          <p>
            &copy; Rento 2021. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  )
}

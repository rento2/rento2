import classNames from 'classnames'
import { IconVk, IconTelegram, IconWhatsapp, ButtonGeneral } from '@shared/ui'
import { DocsItem } from './docsItem/DocsItem'
import { SocialItem } from './socialItem/SocialItem'
import { dataDocsGroup1, dataDocsGroup2 } from '@widgets/footer/model/dataFooter'
import styles from './Footer.module.scss'

export const Footer = (): JSX.Element => {
  return (
    <footer className={ styles['footer'] }>
      <div className={ classNames(styles['footer__inner'], 'container-base', 'flex-s-b') }>
        <ul>
          {dataDocsGroup1.map((item, i) => (<DocsItem key={ i }
            hrefProps={ item.hrefProps }
            textProps={ item.textProps }
          />))}
        </ul>

        <ul>
          {dataDocsGroup2.map((item, i) => (<DocsItem key={ i }
            hrefProps={ item.hrefProps }
            textProps={ item.textProps }
          />))}
        </ul>

        <div>
          <p className={ styles['footer__title-socials'] }>
            Контакты
          </p>
          <ul className={ classNames(styles['footer__list-socials'], 'flex-s-b-c') }>
            <SocialItem
              hrefProps='#'
              iconProps={ <IconTelegram /> }
              titleProps='Telegram'
            />
            <SocialItem
              hrefProps='#'
              iconProps={ <IconWhatsapp /> }
              titleProps='Whatsapp'
            />
            <SocialItem
              hrefProps='#'
              iconProps={ <IconVk /> }
              titleProps='Vk'
            />
          </ul>
        </div>

        <ul className={ classNames(styles['footer__btn-group'], 'flex-s-b') }>
          <li>
            <ButtonGeneral size='xs'
              text='Сдать жильё'
              type='button'
            />
          </li>
          <li>
            <ButtonGeneral grade='secondary'
              size='xs'
              text='Заказать звонок'
              type='button'
            />
          </li>
        </ul>
      </div>
      <div className={ styles['footer__address'] }>
        <div className={ classNames(styles['footer__address-inner'], 'container-base', 'flex-s-b-c') }>
          <p>
            ООО «Ренто»; ИНН 9709072210 КПП 770901001; 105120, г. Москва
          </p>
          <p>
            &copy; Rento 2022. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  )
}

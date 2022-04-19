import classNames from 'classnames'
import { IconVk, IconTelegram, IconWhatsapp, ButtonGeneral } from '@shared/ui'
import { DocsItem } from './docs-item/DocsItem'
import { SocialItem } from '@shared/ui/social-item/SocialItem'
import { dataDocsGroup1, dataDocsGroup2 } from '@widgets/footer/model/dataFooter'
import { useWindowSize } from 'react-use'
import styles from './Footer.module.scss'

export const Footer = (): JSX.Element => {
  const { width } = useWindowSize()

  return (
    <footer className={ styles['footer'] }>
      <div className={ classNames(styles['footer__inner'], 'container', 'flex-s-b') }>
        <div className={ classNames(styles['footer__box'], 'flex-s-b') }>
          <ul>
            {dataDocsGroup1.map((item, i) => (<DocsItem key={ i }
              hrefProps={ item.hrefProps }
              textProps={ item.textProps }
            />))}
          </ul>
          {
          width > 1023 && (
            <ul>
              {dataDocsGroup2.map((item, i) => (<DocsItem key={ i }
                hrefProps={ item.hrefProps }
                textProps={ item.textProps }
              />))}
            </ul>)
          }
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
        </div>

        <ul className={ classNames(styles['footer__btn-group'], 'flex-s-b') }>
          <li>
            <ButtonGeneral round
              classProps={ classNames(styles['footer__btn']) }
              font={ width > 479 ? 's' : 'm' }
              height={ width > 479 ? '40' : '44' }
              type='button'
            >
              Сдать жильё
            </ButtonGeneral>
          </li>
          <li>
            <ButtonGeneral round
              classProps={ classNames(styles['footer__btn']) }
              font={ width > 479 ? 's' : 'm' }
              grade='secondary'
              height={ width > 479 ? '40' : '44' }
              type='button'
            >
              Заказать звонок
            </ButtonGeneral>
          </li>
        </ul>
      </div>
      <div className={ styles['footer__address'] }>
        <div className={ classNames(styles['footer__address-inner'], 'container', 'flex-s-b-c') }>
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

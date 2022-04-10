import classNames from 'classnames'
import { ButtonGeneral, LinkGeneral, SocialItem } from '@shared/ui'
import { IconButtonClose, IconTelegramHeader, IconVkHeader, IconWhatsappHeader } from '@shared/ui/icons'
import { dataNavLinks } from '../../model/dataHeader'
import styles from './MobileMenu.module.scss'

export const MobileMenu = ({ onClose }: { onClose: () => void }): JSX.Element => (
  <div className={ styles['mobile-menu'] }
    id='owner-menu-wrapper'
  >
    <div className={ styles['mobile-menu__inner'] }
      id='owner-mobile-menu'
    >
      <ButtonGeneral
        classProps={ classNames(styles['mobile-menu__btn-close']) }
        font='s'
        grade='neutral'
        height='40'
        onClick={ onClose }
      >
        <IconButtonClose />
      </ButtonGeneral>

      <div className={ styles['mobile-menu__nav-wrapper'] }>
        <nav className={ styles['mobile-menu__nav'] }>
          <ul className={ styles['mobile-menu__list'] }>
            {dataNavLinks.map(({ hrefProps, textProps }) => (
              <li key={ textProps }
                className={ styles['mobile-menu__item'] }
              >
                <LinkGeneral href={ hrefProps }>
                  {textProps}
                </LinkGeneral>
              </li>
            ))}
          </ul>
        </nav>
        {/* TODO когда будет авторизация */}
        {/* <ul className={ styles['mobile-menu__auth-list'] }>
          <li className={ styles['mobile-menu__auth-item'] }>
            <LinkGeneral href='#'
              icon={ <IconFavourite /> }
            >
              <span>
                Избранное
              </span>
            </LinkGeneral>
          </li>
          <li className={ styles['mobile-menu__auth-item'] }>
            <LinkGeneral classProps='flex-center'
              href='#'
              icon={ <IconAuth /> }
            >
              <span>
                Войти
              </span>
            </LinkGeneral>
          </li>
        </ul> */}
        <ul className={ classNames(styles['mobile-menu__socials'], 'flex-center') }>
          <SocialItem
            classProps={ styles['mobile-menu__social-item'] }
            hrefProps='#'
            iconProps={ <IconTelegramHeader /> }
            titleProps='Telegram'
          />
          <SocialItem
            classProps={ styles['mobile-menu__social-item'] }
            hrefProps='#'
            iconProps={ <IconWhatsappHeader /> }
            titleProps='Whatsapp'
          />
          <SocialItem
            hrefProps='#'
            iconProps={ <IconVkHeader /> }
            titleProps='Vk'
          />
        </ul>
        <ButtonGeneral classProps={ classNames(styles['mobile-menu__phone-btn']) }
          font='s'
          grade='neutral'
          height='40'
        >
          +7 (966) 032-17-63
        </ButtonGeneral>
      </div>
    </div>
  </div>

)

import { forwardRef } from 'react'
import classNames from 'classnames'
import { ButtonGeneral, LinkGeneral, SocialItem, IconClose, IconTelegram, IconVk, IconWhatsapp } from '@shared/ui'
import { dataNavLinks } from '@widgets/header/model/dataHeader'
import styles from './MobileMenu.module.scss'

interface IProps {
  onClose: () => void
}

export const MobileMenu = forwardRef<HTMLDivElement | null, IProps>(({ onClose }: IProps, ref) => (
  <div
    className={ styles['mobile-menu'] }
  >
    <div ref={ ref }
      className={ styles['mobile-menu__inner'] }
    >
      <ButtonGeneral
        classProps={ classNames(styles['mobile-menu__btn-close']) }
        font='m'
        grade='neutral'
        height='44'
        onClick={ onClose }
      >
        <IconClose figure='square' />
      </ButtonGeneral>

      <div className={ styles['mobile-menu__nav-wrapper'] }>
        <nav className={ styles['mobile-menu__nav'] }>
          <ul className={ styles['mobile-menu__list'] }>
            {dataNavLinks.map(({ hrefProps, textProps }) => (
              <li key={ textProps }
                className={ classNames(styles['mobile-menu__item']) }
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
              <LinkGeneral href='#'>
                <IconHeart />
                <span>
                  Избранное
                </span>
              </LinkGeneral>
            </li>
            <li className={ styles['mobile-menu__auth-item'] }>
              <LinkGeneral classProps='flex-center' href='#'>
                <IconUserSquare />
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
            iconProps={ <IconTelegram classProps={ styles['mobile-menu__icon-telegram'] } /> }
            titleProps='Telegram'
          />
          <SocialItem
            classProps={ styles['mobile-menu__social-item'] }
            hrefProps='#'
            iconProps={ <IconWhatsapp classProps={ styles['mobile-menu__icon-whatsapp'] } /> }
            titleProps='Whatsapp'
          />
          <SocialItem
            hrefProps='#'
            iconProps={ <IconVk classProps={ styles['mobile-menu__icon-vk'] } /> }
            titleProps='Vk'
          />
        </ul>
        <ButtonGeneral classProps={ classNames(styles['mobile-menu__phone-btn']) }
          font='s'
          grade='neutral'
          height='40'
          href="tel:+74993213185"
        >
          +7 499 321 31 85
        </ButtonGeneral>
      </div>
    </div>
  </div>
)
)

MobileMenu.displayName = 'MobileMenu'

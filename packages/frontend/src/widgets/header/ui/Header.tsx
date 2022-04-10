import { useState } from 'react'
import classNames from 'classnames'
import { ButtonGeneral, LinkGeneral } from '@shared/ui'
import { IconLogo, IconBurger } from '@shared/ui/icons'
import { MobileMenu } from './mobile-menu/MobileMenu'
import { dataNavLinks } from '../model/dataHeader'
import styles from './Header.module.scss'

export const Header = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className={ styles['header'] }>
      <div className={ classNames(styles['header__inner'], 'container') }>
        <LinkGeneral classProps={ styles['header__logo'] }
          href='/'
        >
          <IconLogo />
        </LinkGeneral>
        <nav>
          <ul className={ classNames(styles['header__list'], 'flex-center') }>
            {dataNavLinks.map(({ hrefProps, textProps }) => (
              <li key={ textProps }
                className={ styles['header__item'] }
              >
                <LinkGeneral href={ hrefProps }>
                  {textProps}
                </LinkGeneral>
              </li>
            ))}
          </ul>
        </nav>
        {/* TODO когда будет авторизация */}
        {/* <ul className={ classNames(styles['header__auth-list'], 'flex-center') }>
          <li className={ styles['header__auth-item'] }>
            <LinkGeneral href='#'
              icon={ <IconFavourite /> }
            />
          </li>
          <li className={ styles['header__auth-item'] }>
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
        <ButtonGeneral classProps={ classNames(styles['header__phone-btn']) }
          font='s'
          grade='neutral'
          height='40'
        >
          +7 (966) 032-17-63
        </ButtonGeneral>

        <ButtonGeneral
          classProps={ classNames(styles['mobile-menu__btn-open']) }
          font='s'
          grade='neutral'
          height='40'
          onClick={ () => setShowMenu(true) }
        >
          <IconBurger />
        </ButtonGeneral>
        {showMenu && <MobileMenu onClose={ () => setShowMenu(false) } />}
      </div>
    </header>
  )
}

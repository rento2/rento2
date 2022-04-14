import { useState, useRef } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { ButtonGeneral, LinkGeneral, IconBurger } from '@shared/ui'
import { MobileMenu } from './mobile-menu/MobileMenu'
import { dataNavLinks } from '../model/dataHeader'
import { useOnClickOutside } from '@shared/lib/hooks/useClickOutside'
import styles from './Header.module.scss'

export const Header = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false)
  const dropdown = useRef<HTMLDivElement>(null)

  useOnClickOutside(dropdown, () => setShowMenu(false))

  return (
    <header className={ styles['header'] }>
      <div className={ classNames(styles['header__inner'], 'container', 'flex-s-b-c') }>
        <LinkGeneral classProps={ styles['header__logo'] }
          href='/'
        >
          <Image alt='Logo'
            className={ styles['header__logo-img'] }
            height={ 14 }
            src='/images/logo.svg'
            width={ 60 }
          />
        </LinkGeneral>
        <nav>
          <ul className={ classNames(styles['header__list'], 'flex-center') }>
            {dataNavLinks.map(({ hrefProps, textProps }) => (
              <li key={ textProps }
                className={ styles['header__item'] }
              >
                <LinkGeneral classProps={ styles['header__link'] }
                  href={ hrefProps }
                >
                  {textProps}
                </LinkGeneral>
              </li>
            ))}
          </ul>
        </nav>
        {/* TODO когда будет авторизация */}
        {/* <ul className={ classNames(styles['header__auth-list'], 'flex-center') }>
          <li className={ styles['header__auth-item'] }>
            <LinkGeneral href='#'>
              <IconFavourite />
            </LinkGeneral>
          </li>
          <li className={ styles['header__auth-item'] }>
            <LinkGeneral classProps='flex-center'
              href='#'
            >
              <IconAuth />
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
          href="tel:+74993213185"
        >
          +7 499 321 31 85
        </ButtonGeneral>

        <ButtonGeneral
          classProps={ classNames(styles['header__btn-open']) }
          font='s'
          grade='neutral'
          height='40'
          onClick={ () => setShowMenu(true) }
        >
          <IconBurger />
        </ButtonGeneral>
        {showMenu && (<MobileMenu ref={ dropdown }
          onClose={ () => setShowMenu(false) }
        />)}
      </div>
    </header>
  )
}

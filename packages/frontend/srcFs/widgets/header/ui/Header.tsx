import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'
import { ButtonGeneral } from '@shared/ui'
import styles from './Header.module.scss'

export function Header (): JSX.Element {
  return (
    <header className={ styles['header'] }>
      <div className={ styles['header__inner'] }>
        <Link href='/'>
          <a className={ styles['header__logo'] }>
            <Image alt='Logo'
              className={ styles['header__logo-img'] }
              height={ 17 }
              src='/images/logo.svg'
              width={ 83 }
            />
          </a>
        </Link>
        <nav className={ styles['header__nav'] }>
          <ul className={ styles['header__list'] }>
            <li className={ styles['header__item'] }>
              <Link href='/long'>
                <a className={ styles['header__link'] }>
                  Долгосрочная аренда
                </a>
              </Link>
            </li>
            <li className={ styles['header__item'] }>
              <Link href='/short'>
                <a className={ styles['header__link'] }>
                  Краткосрочная аренда
                </a>
              </Link>
            </li>
            <li className={ styles['header__item'] }>
              <Link href='/owners'>
                <a className={ [styles['header__link'], styles['header__link_active']].join(' ') }>
                  Собственникам
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <ButtonGeneral
          size='xs'
          text='+7 (966) 032-17-63'
        />

        {/* Мобильное меню */}
        <div className={ styles['mobile-menu'] }
          id='owner-menu-wrapper'
        >
          <div className={ styles['mobile-menu__inner'] }
            id='owner-mobile-menu'
          >
            <button className={ styles['mobile-menu__btn-close'] }
              id='btn-close-menu'
              type='button'
            >
              <Image alt='button-close'
                className={ styles['mobile-menu__img-close'] }
                height={ 23 }
                src='/images/owners/close.svg'
                width={ 23 }
              />
            </button>
            <div className={ styles['mobile-menu__nav-wrapper'] }>
              <nav>
                <ul>
                  <li className={ styles['mobile-menu__item'] }>
                    <Link href='/long'>
                      <a>
                        Долгосрочная аренда
                      </a>
                    </Link>
                  </li>
                  <li className={ styles['mobile-menu__item'] }>
                    <Link href='/short'>
                      <a>
                        Краткосрочная аренда
                      </a>
                    </Link>
                  </li>
                  <li className={ styles['mobile-menu__item'] }>
                    <Link href='/owners'>
                      <a className={ styles['header__link_active'] }>
                        Собственникам
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <a className={ styles['mobile-menu__phone'] }
                data-tag-manager='phone'
                href='tel:+79660321763'
              >
                +7 (966) 032-17-63
              </a>
            </div>
          </div>
        </div>
        <button className={ styles['mobile-menu__btn-open'] }
          id='btn-open-menu'
        >
          <Image alt='button-menu'
            height={ 20 }
            src='/images/owners/btn-menu.svg'
            width={ 30 }
          />
        </button>
      </div>
    </header>
  )
}

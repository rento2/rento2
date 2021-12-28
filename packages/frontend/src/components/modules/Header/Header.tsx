import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'
import ButtonCustomizable from '../../elements/buttons/ButtonCustomizable/ButtonCustomizable'
import styles from './Header.module.scss'

export default function Header (): JSX.Element {
  return (
    <header className={styles['header']}>
      <div className={styles['header__inner']}>
        <a className={styles['header__logo']} href='/'>
          <Image className={styles['header__logo-img']} src='/images/logo.svg' alt='Logo' width={83} height={17} />
        </a>
        <nav className={styles['header__nav']}>
          <ul className={styles['header__list']}>
            <li className={styles['header__item']}>
              <Link href='/long'>
                <a className={styles['header__link']}>
                  Долгосрочная аренда
                </a>
              </Link>
            </li>
            <li className={styles['header__item']}>
              <Link href='/short'>
                <a className={styles['header__link']}>
                  Краткосрочная аренда
                </a>
              </Link>
            </li>
            <li className={styles['header__item']}>
              <Link href='/owners'>
                <a className={[styles['header__link'], styles['header__link_active']].join(' ')}>
                  Собственникам
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <ButtonCustomizable
          title={'+7 (966) 032-17-63'}
          link={'tel:+79660321763'}
          tagManager={'phone'}
          classes={'button ' +
          'button-decoration__round ' +
          'button-decoration__size-small'}
          type={'button-link'}
        />

        {/* Мобильное меню */}
        <div className={styles['mobile-menu']} id='owner-menu-wrapper'>
          <div className={styles['mobile-menu__inner']} id='owner-mobile-menu'>
            <button type='button' className={styles['mobile-menu__btn-close']} id='btn-close-menu'>
              <Image className={styles['mobile-menu__img-close']} src='/images/owners/close.svg' alt='button-close' width={23} height={23} />
            </button>
            <div className={styles['mobile-menu__nav-wrapper']}>
              <nav>
                <ul>
                  <li className={styles['mobile-menu__item']}>
                    <Link href='/long'>
                      <a>
                        Долгосрочная аренда
                      </a>
                    </Link>
                  </li>
                  <li className={styles['mobile-menu__item']}>
                    <Link href='/short'>
                      <a>
                        Краткосрочная аренда
                      </a>
                    </Link>
                  </li>
                  <li className={styles['mobile-menu__item']}>
                    <Link href='/owners'>
                      <a className={styles['header__link_active']}>
                        Собственникам
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <a className={styles['mobile-menu__phone']} data-tag-manager='phone' href='tel:+79660321763'>
                +7 (966) 032-17-63
              </a>
            </div>
          </div>
        </div>
        <button className={styles['mobile-menu__btn-open']} id='btn-open-menu'>
          <Image src='/images/owners/btn-menu.svg' alt='button-menu' width={30} height={20} />
        </button>
      </div>
    </header>
  )
}

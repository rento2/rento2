import classNames from 'classnames'
import { ButtonGeneral, LinkGeneral } from '@shared/ui'
import { IconButtonClose } from '@shared/ui/icons'
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
        classProps={ classNames(styles['mobile-menu__btn-open']) }
        font='s'
        grade='neutral'
        height='40'
        icon={ <IconButtonClose /> }
        onClick={ onClose }
      />

      <div className={ styles['mobile-menu__nav-wrapper'] }>
        <nav className={ styles['header__nav'] }>
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
        {/* <nav>
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
        </nav> */}
        <a className={ styles['mobile-menu__phone'] }
          data-tag-manager='phone'
          href='tel:+79660321763'
        >
          +7 (966) 032-17-63
        </a>
      </div>
    </div>
  </div>

)

import { ButtonGeneral, Layout } from '@shared/ui'
import { Footer } from '@widgets/footer'
import { Header } from '@widgets/header'
import router from 'next/router'
import Image from 'next/dist/client/image'
import classNames from 'classnames'
import styles from './NotFoundPage.module.scss'

export const NotFoundPage = (): JSX.Element => {
  return (
    <Layout
      footer={ <Footer /> }
      header={ <Header /> }
    >
      <div className={ classNames('container', styles['wrapper']) }>
        <div className={ styles['content'] }>
          <div className={ styles['key'] }>

            <Image height='115'
              src="/images/notFoundPage/rectangle.png"
              width='124'
            />
          </div>
          <div className={ styles['error'] }>
            <Image height='143.5'
              src="/images/notFoundPage/img-404.png"
              width='340'
            />
            <p className={ styles['error-title'] }>
              Упс!.. Страница не найдена
            </p>
            <p className={ styles['error-description'] }>
              Скорее всего, её перенесли в другое место
            </p>
            <ButtonGeneral
              classProps={ classNames(styles['button']) }
              font="s"
              grade='neutral'
              height="40"
              round={ true }
              type="button"
              onClick={ () => router.back() }
            >
              Вернутся назад
            </ButtonGeneral>
          </div>
          <div className={ styles['tag'] }>
            <Image height='120'
              src="/images/notFoundPage/tag.png"
              width='130'
            />
          </div>

        </div>
      </div>
    </Layout>
  )
}

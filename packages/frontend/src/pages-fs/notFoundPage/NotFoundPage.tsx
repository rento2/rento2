// import { useWindowDimensions } from '@shared/lib/hooks/useWindowDimensions'
import { ButtonGeneral, Layout } from '@shared/ui'
import { Footer } from '@widgets/footer'
import { Header } from '@widgets/header'
import styles from './NotFoundPage.module.scss'
import router from 'next/router'
import classNames from 'classnames'

export const NotFoundPage = (): JSX.Element => {
  return (
    <Layout
      footer={ <Footer /> }
      header={ <Header /> }
    >
      <div className={ classNames('container', styles['wrapper']) }>
        <div className={ styles['key'] }>
          <img src="/images/notFoundPage/rectangle.svg" />
        </div>
        <div className={ styles['error'] }>
          <img src="/images/notFoundPage/img_404.svg" />
          <p className={ styles['error-title'] }>
            Упс!.. Страница не найдена
          </p>
          <p className={ styles['error-description'] }>
            Скорее всего, её перенесли в другое место
          </p>
        </div>
        <img className={ styles['bg'] }
          src="/images/notFoundPage/pagenotfouldBG.svg"
        />
        <div className={ styles['tag'] }>
          <img src="/images/notFoundPage/tag.svg" />
        </div>
        <ButtonGeneral
          classProps={ classNames(styles['back-button']) }
          font="l"
          grade='neutral'
          height="40"
          type="button"
          onClick={ () => router.back() }
        >
          Вернутся назад
        </ButtonGeneral>
      </div>
    </Layout>
  )
}

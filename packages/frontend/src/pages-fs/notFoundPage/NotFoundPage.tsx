import router from 'next/router'
import classNames from 'classnames'
import { ButtonGeneral, Layout } from '@shared/ui'
import { Footer } from '@widgets/footer'
import { Header } from '@widgets/header'
import styles from './NotFoundPage.module.scss'

export const NotFoundPage = (): JSX.Element => {
  return (
    <Layout
      footer={ <Footer /> }
      header={ <Header /> }
    >
      <div className={ classNames('container', styles['wrapper']) }>
        <div className={ styles['content'] }>
          <div className={ styles['key'] } />
          <div className={ styles['error'] }>
            <div className={ styles['error_notFound'] } />
            <div className={ styles['error_bg'] } />
            <div className={ styles['error_text__wrapper'] }>
              <p className={ styles['error_title'] }>
                Упс!.. Страница не найдена
              </p>
              <p className={ styles['error_description'] }>
                Скорее всего, её перенесли в другое место
              </p>
            </div>
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
          <div className={ styles['tag'] } />

        </div>
      </div>
    </Layout>
  )
}

import { FC, useMemo, useState } from 'react'
import classNames from 'classnames'
import { Controller, useForm } from 'react-hook-form'

import { ButtonGeneral, IconLocation, IconSetting4, Select, ChipBox, DoubleInput, NewModal } from '@shared/ui'
import { options, chips } from '../model/mock'
import { useSticky } from '../lib/hooks/useSticky'

import mainStyles from './MainFilter.module.scss'
import headerStyles from './HeaderFilter.module.scss'

const defaultValues = {
  types: [],
  priceRange: { min: '', max: '' },
  sortType: options[1]
}

export const Filter: FC = () => {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false)

  const { control, handleSubmit, reset } = useForm({ defaultValues })
  const { anchorRef, isHeaderMode, showHeader } = useSticky()

  const styles = useMemo(() => isHeaderMode ? headerStyles : mainStyles, [isHeaderMode])

  return (
    <>
      <div
        className={ classNames(styles.filter, { [styles.sticky]: showHeader }) }
        onSubmit={ handleSubmit(console.log) }
      >
        <form className={ classNames(styles.filter__container, { container: isHeaderMode }) }>
          <fieldset className={ styles.fieldset }>
            <Controller
              control={ control }
              name="priceRange"
              render={ ({ field: { value, onChange } }) =>
                (<DoubleInput
                  classProps={ styles.fieldset__item }
                  value={ value }
                  onChange={ onChange }
                />) }
            />
            <Controller
              control={ control }
              name="types"
              render={ ({ field: { value, onChange } }) =>
                (<ChipBox
                  chips={ chips }
                  classProps={ styles.fieldset__item }
                  value={ value }
                  onChange={ onChange }
                />) }
            />
            {!isHeaderMode && (
              <ButtonGeneral
                classProps={ classNames(styles['button-map']) }
                font='s'
                grade='neutral'
                height='40'
              >
                <span className={ styles['button-map__text'] }>
                  На карте
                </span>
                <IconLocation classProps={ styles['button-map__icon'] } />
              </ButtonGeneral>
            )}
          </fieldset>
          <fieldset className={ styles.fieldset }>
            <div className={ styles.other }>
              <Controller
                control={ control }
                name="sortType"
                render={ ({ field: { value, onChange } }) =>
                  (<Select
                    className={ classNames(styles.select, styles.other__item) }
                    instanceId="select"
                    isSearchable={ false }
                    options={ options }
                    value={ value }
                    onChange={ onChange }
                  />) }
              />
              <ButtonGeneral
                classProps={ classNames(styles['button-filters'], styles.other__item) }
                font='s'
                full="text"
                grade="neutral"
                height='40'
                onClick={ () => setShowAdvancedOptions(!showAdvancedOptions) }
              >
                <span className={ styles['button-filters__text'] }>
                  Фильтры
                </span>
                <IconSetting4 classProps={ styles['button-filters__icon'] } />
              </ButtonGeneral>
              <ButtonGeneral
                classProps={ classNames(styles['button-reset'], styles.other__item) }
                font='s'
                full="text"
                grade="neutral"
                height='40'
                onClick={ () => reset(defaultValues) }
              >
                Сбросить
              </ButtonGeneral>
            </div>
            <ButtonGeneral
              round
              classProps={ classNames(styles['button-search']) }
              font="s"
              height='40'
              type='button'
            >
              Показать 88888 квартир
            </ButtonGeneral>
            {isHeaderMode && (
              <ButtonGeneral
                classProps={ classNames(styles['button-map']) }
                font='s'
                grade='neutral'
                height='40'
              >
                <IconLocation />
              </ButtonGeneral>
            )}
          </fieldset>
        </form>
      </div>
      <div ref={ anchorRef } />
      <NewModal
        isSwipe
        isOpen={ showAdvancedOptions }
        title="Headlien Text"
        translate="right"
        onClose={ () => setShowAdvancedOptions(false) }
      >
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum laudantium nobis hic voluptates. Nobis corporis ipsa pariatur laborum ut quae, impedit cum error. Porro accusamus dignissimos nulla nesciunt, et explicabo ab pariatur reiciendis maxime reprehenderit architecto nisi, tempora, dolorum ipsa voluptatibus quibusdam aspernatur expedita! Assumenda ab quis repellendus asperiores at omnis explicabo suscipit facilis, quam fugit facere natus est nobis doloremque libero ea porro, tempora mollitia necessitatibus, animi neque quo impedit! Itaque doloribus a repudiandae iste. Impedit adipisci molestiae nobis magnam praesentium, veniam rem aspernatur aut. Obcaecati, minima? Libero, officiis tempore itaque pariatur dolorem fugiat nostrum ad, quos officia non temporibus quo, accusamus velit? Est explicabo rerum incidunt ullam, iusto quisquam officia dolorem fugit perspiciatis illum excepturi repellendus assumenda ad ducimus reiciendis accusantium aperiam tempora, nisi maxime sint enim consequatur. Reiciendis, nam! Accusantium dolores ipsum ea, sed est tempora voluptate voluptates laudantium suscipit, commodi, amet enim fugiat quos perspiciatis totam molestias numquam odit. Animi cumque voluptatum quae sed voluptatem necessitatibus doloremque illum, fugiat dolore repellendus nesciunt maxime ipsam aliquam reprehenderit quasi suscipit? Alias eveniet consequatur molestiae delectus distinctio quaerat corrupti blanditiis eum sit voluptas voluptate ullam placeat laudantium porro facilis, ducimus asperiores sed necessitatibus. Earum blanditiis aliquid accusamus nihil iusto modi, quo assumenda doloribus sunt ipsam voluptate, aperiam sed impedit! Exercitationem laboriosam id reiciendis harum quisquam dolorem dolore voluptate, odit, facilis totam minima necessitatibus vero numquam autem consequuntur pariatur temporibus sint tempore animi quibusdam explicabo sequi atque nostrum ratione? Ea, odio placeat quia ducimus, sapiente maiores consequuntur sit, impedit voluptatibus maxime repudiandae quis sunt consequatur. Porro ab fugit magnam eum nisi mollitia exercitationem tempora laborum voluptate earum nostrum necessitatibus, nemo voluptatibus sapiente cupiditate numquam. Neque veritatis cupiditate dolor, repellendus doloribus fugiat non aliquid beatae aliquam est, unde molestiae inventore cum! Id eligendi, in error sunt laboriosam ipsa nihil minus consequatur, cupiditate natus sit itaque repellat vitae. Quia nemo dicta impedit fuga quas asperiores alias aliquam sed, obcaecati, consequuntur harum non vero, nulla voluptates corporis. Ipsa hic ipsum sunt aliquid asperiores corporis omnis excepturi, recusandae saepe accusantium doloribus maiores, officiis exercitationem quisquam voluptatibus quos voluptatem dicta molestias possimus quidem modi eos! Nobis dolor quia, dolorum repellendus eligendi molestiae facilis doloribus officiis id nostrum amet quas est soluta veritatis dolores. Assumenda laborum nulla culpa nisi consequatur sed tempora iure laudantium nesciunt eaque voluptate, quos cupiditate autem amet obcaecati reiciendis porro nemo doloribus facere. Soluta quia deserunt totam unde voluptatum temporibus nobis ipsam ipsa laudantium dignissimos quaerat illo nihil voluptatibus, beatae perferendis corrupti et voluptas assumenda laborum. Excepturi accusantium, quidem quia corrupti autem eos temporibus voluptate minima maiores! Quam, magni excepturi ea voluptas, labore quas omnis atque provident rem error deleniti inventore eius sed corrupti unde illum exercitationem id totam ipsum amet eos repellat porro. Debitis molestias harum voluptate atque sint iusto pariatur dolores! Non neque incidunt dolorem pariatur est tempora molestias numquam aut, nesciunt, fugiat reprehenderit autem eum velit reiciendis, nobis veniam earum nam dolorum repellat repellendus aliquam. Quis porro aliquid dicta repudiandae quasi minima magnam esse molestiae ducimus, beatae perferendis, enim maiores ad sed maxime facilis accusantium voluptas. Exercitationem, earum ipsa temporibus ab modi sit, hic eaque rem quis ea quaerat iure odit facilis laudantium optio soluta? Ad quibusdam iure rem quos sequi ea iusto cum perspiciatis dolorem laboriosam sed ipsam temporibus quidem minima possimus, commodi animi libero cumque, labore alias deserunt consequatur similique corrupti? Amet, vero! Omnis beatae ratione molestiae, aspernatur iusto dicta eaque. Cupiditate nostrum qui deleniti deserunt eius voluptates blanditiis, facere velit nobis ex iste unde, quo amet ea itaque, quidem similique molestiae voluptatum perferendis. Provident fugit porro rerum, mollitia saepe quisquam sint eius corporis incidunt perspiciatis distinctio, amet, aspernatur nesciunt labore obcaecati laudantium explicabo velit commodi aperiam. Vitae ea ducimus expedita iure odit amet ad? Cum sequi aperiam dolorem magnam inventore perferendis fuga saepe! Modi accusantium nostrum minus blanditiis sed aut eius mollitia. Modi, numquam asperiores totam error praesentium eveniet accusamus. Aliquam, similique. Quaerat ipsa assumenda adipisci voluptas, totam, atque pariatur non iure numquam nulla dolores eveniet! Obcaecati laudantium ipsam cum, corrupti necessitatibus quisquam distinctio molestias nostrum ut cumque natus vero nemo illo nobis consectetur harum id? Officia delectus commodi, praesentium autem esse dolorum explicabo accusamus. Consequatur corporis ad quos. Tempore quibusdam repudiandae assumenda ducimus veritatis, inventore at expedita voluptatum, saepe aut adipisci unde. Tempore adipisci, officia accusantium nam illo fuga sit corrupti ad totam explicabo placeat velit fugit quia magni, quidem nisi animi amet qui consequuntur unde ipsum. Quasi quibusdam, id dolorem autem nostrum repellendus sed libero nemo nihil, aspernatur consequatur. Architecto ad sapiente repellat nulla consequuntur asperiores, recusandae tempore reiciendis dolorem deleniti autem blanditiis similique alias omnis velit, doloribus quod laboriosam dolore illum dignissimos numquam fugiat at aut? Eveniet, reprehenderit a! Laudantium vel doloremque incidunt accusamus exercitationem fugit, aut dolores dolorem consequuntur recusandae rerum? Quam, aliquid ullam. Deserunt iusto voluptates quidem est asperiores consectetur autem error perferendis sapiente neque eligendi aut eaque quibusdam temporibus atque fugiat, ab dignissimos rerum fuga voluptatibus, vel quos facilis exercitationem dicta! Beatae labore doloribus voluptate natus hic, aspernatur consequatur! Vitae, expedita cupiditate recusandae similique excepturi eveniet iusto dolorum neque perspiciatis error iste consequatur fugiat magnam nisi ex officia veniam delectus nostrum, obcaecati at, rerum vero. Deleniti provident atque facere deserunt, numquam rem totam nisi dolor laborum quaerat hic unde aliquam porro nostrum non ipsam impedit, cum dicta sapiente reiciendis? Odit iusto autem natus error neque maiores asperiores sapiente culpa voluptate dolores. Aut quis suscipit veniam blanditiis ex necessitatibus exercitationem repellat expedita repellendus quasi praesentium cumque reiciendis magni perspiciatis saepe voluptatum quam iste voluptas adipisci possimus eos et, labore quidem. Provident, dolor magnam dolorum similique aliquid mollitia hic, unde commodi dignissimos itaque eius dicta sunt veniam quas eos esse dolorem, quibusdam facilis. Numquam sed quas pariatur, quibusdam dolores distinctio blanditiis quasi sit, molestias, ullam voluptas. Cum sed soluta nam veniam inventore perspiciatis maxime, hic accusamus eaque, ducimus est doloribus quos possimus ad sit, nemo vero assumenda! Fuga aut praesentium sequi, totam debitis amet optio esse deserunt cupiditate voluptates odio consequatur sapiente iure nulla eligendi labore fugit animi! Expedita voluptatem iusto quaerat.
        </div>
      </NewModal>
    </>
  )
}

import { ButtonGeneral } from '@elements/buttons/ButtonGeneral/ButtonGeneral'
import { CalculationDropdown } from './CalculationDropdown/CalculationDropdown'
import classnames from 'classnames'
import Image from 'next/image'
import DefaultInput from '@elements/inputs/DefaultInput/DefaultInput'
import Link from 'next/link'
import styles from './CalculationForm.module.scss'
import { RepairCard } from './RepairCard/RepairCard'
import InputRadio from '@elements/inputs/InputRadio/InputRadio'

interface IDataRepair {
  altText: string
  classProps: string
  name: string
  spanProps: string
  spanText: string
  src: string
  value: string
}

const dataRepair: IDataRepair[] = [
  {
    altText: 'repair-old',
    classProps: 'input-hidden',
    name: 'repair',
    spanProps: 'check-repair',
    spanText: 'Очень старый ремонт',
    src: '/images/owners/repair-old.jpg',
    value: 'repair-old'
  },
  {
    altText: 'cosmetic',
    classProps: 'input-hidden',
    name: 'repair',
    spanProps: 'check-repair',
    spanText: 'Косметический ремонт',
    src: '/images/owners/repair-cosmetic.jpg',
    value: 'repair-cosmetic'
  },
  {
    altText: 'high-quality',
    classProps: 'input-hidden',
    name: 'repair',
    spanProps: 'check-repair',
    spanText: 'Качественный ремонт и мебель',
    src: '/images/owners/repair-high-quality.jpg',
    value: 'repair-high-quality'
  },
  {
    altText: 'repair-designer',
    classProps: 'input-hidden',
    name: 'repair',
    spanProps: 'check-repair',
    spanText: 'Дизайнерский ремонт и мебель',
    src: '/images/owners/repair-high-quality.jpg',
    value: 'repair-designer'
  }
]

export function CalculationForm (): JSX.Element {
  return (
    <div>
      <h2 className={ styles['heading'] }>
        Хотите знать сколько
        <span className={ classnames(styles['heading'], styles['heading_block']) }>
          {' '}
          может зарабатывать ваша квартира?
          {' '}
        </span>
      </h2>
      <p className={ styles['text'] }>
        Заполните форму и отправьте нам
      </p>
      <form action="#"
        className={ styles['form'] }
        id="calculation-form"
        name="owners-calculation"
      >
        <ul className={ styles['list'] }>
          <li className={ styles['item'] }>
            <p className={ styles['title'] }>
              Расположение квартиры*
            </p>
            <DefaultInput placeholder='Улица или метро'
              type='text'
            />
            <span className={ styles['mistake-owner-text'] }
              id="address-mistake"
            />
          </li>
          <li className={ classnames(styles['item'], styles['item_order']) }>
            <p className={ styles['title'] }>
              Количество комнат*
            </p>
            <div className={ styles['inner'] }
              id="rooms-inner"
            >
              <ul className={ styles['list-rooms'] }>
                <li>
                  <label>
                    <InputRadio classProps={ classnames(styles['input-hidden']) }
                      name="rooms"
                      value="studio"
                    />
                    <span className={ classnames(styles['numb-rooms'], styles['numb-rooms_ellipse']) }>
                      Студия
                    </span>
                  </label>
                </li>
                <li>
                  <label>
                    <InputRadio classProps={ classnames(styles['input-hidden']) }
                      name="rooms"
                      value="1 room"
                    />
                    <span className={ styles['numb-rooms'] }>
                      1
                    </span>
                  </label>
                </li>
                <li>
                  <label>
                    <InputRadio classProps={ classnames(styles['input-hidden']) }
                      name="rooms"
                      value="2 rooms"
                    />
                    <span className={ styles['numb-rooms'] }>
                      2
                    </span>
                  </label>
                </li>
                <li>
                  <label>
                    <InputRadio classProps={ classnames(styles['input-hidden']) }
                      name="rooms"
                      value="3+ rooms"
                    />
                    <span className={ styles['numb-rooms'] }>
                      3+
                    </span>
                  </label>
                </li>
              </ul>
            </div>
            <span className={ styles['mistake-owner-text'] }
              id="rooms-mistake"
            />
          </li>
          <li className={ styles['item'] }>
            <p className={ styles['title'] }>
              Время до метро*
            </p>

            <div className={ classnames(styles['inner'], styles['inner-pos']) }
              id="time-select"
            >
              <CalculationDropdown />
            </div>
            <span className={ classnames(styles['mistake-owner-text'], styles['mistake-owner-text-z-index']) }
              id="time-mistake"
            />
          </li>
          <li className={ styles['item'] }>
            <p className={ styles['title'] }>
              Телефон для обратной связи*
            </p>
            <input className={ classnames(styles['inner'], styles['inner-phone']) }
              id="phone-calculation"
              name="phone"
              placeholder="+7(___)-____-___"
              type="tel"
            />
            <span className={ styles['mistake-owner-text'] }
              id="calculation-mistake"
            />
          </li>
        </ul>
        <p className={ classnames(styles['title'], styles['title_mb']) }>
          Состояние квартиры
        </p>
        <ul className={ styles['list-repair'] }>

          {
          dataRepair.map((item, i) =>
            (<RepairCard
              key={ i }
              altText={ item.altText }
              classProps={ classnames(styles[item.classProps]) }
              name={ item.name }
              spanProps={ classnames(styles[item.spanProps]) }
              spanText={ item.spanText }
              src={ item.src }
              value={ item.value }
            />
            ))
          }

        </ul>
        <p className={ styles['text-proposal'] }>
          Проанализируем предложения в вашем районе и перезвоним в течении 15 минут.
        </p>
        <label className={ styles['agreement'] }>
          <input className={ styles['input-hidden'] }
            id="agreement-checkbox"
            type="checkbox"
          />
          <span className={ styles['agreement-check'] }
            id="checkbox-inner"
          />
          <span className={ styles['mistake-owner-text-checkbox'] }
            id="checkbox-mistake"
          />
          <span className={ styles['agreement-text'] }>
            Нажимая на кнопку, вы даете
            {' '}
            <Link href="/docs/privacy">
              <a>
                согласие на Обработку персональных данных
              </a>
            </Link>
          </span>
        </label>
        <ButtonGeneral text='Заказать расчет'
          type='submit'
        />
        <div className={ styles['img-phone'] }>
          <Image alt="phone-calculation"
            height={ 223 }
            src="/images/owners/phone-calculation.png"
            width={ 262 }
          />
        </div>
      </form>
    </div>
  )
}

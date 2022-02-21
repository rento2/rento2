/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @next/next/no-img-element */
import { ButtonGeneral } from '@elements/buttons/button/ButtonGeneral'
import Input from '@elements/input/Input'
import { CalculationDropdown } from './CalculationDropdown/CalculationDropdown'
import styles from './CalculationForm.module.scss'

export function CalculationForm () {
  return (
    <div>
      <h2 className={ styles['calculation-owner__heading'] }>
        Хотите знать сколько
        <span className={ [styles['calculation-owner__heading'], styles['calculation-owner__heading_block']].join(' ') }>
          {' '}
          может зарабатывать ваша квартира?
          {' '}
        </span>
      </h2>
      <p className={ styles['calculation-owner__text'] }>
        Заполните форму и отправьте нам
      </p>
      <form action="#"
        className={ styles['calculation-owner__form'] }
        id="calculation-form"
        name="owners-calculation"
      >
        <ul className={ styles['calculation-owner__list'] }>
          <li className={ styles['calculation-owner__item'] }>
            <p className={ styles['calculation-owner__title'] }>
              Расположение квартиры*
            </p>
            {/* <input className={styles['calculation-owner__input']}  id="address-input"   type="text" name="address" placeholder="Улица или метро"/> */}
            <Input placeholder='Улица или метро'
              type='text'
            />
            <span className={ styles['mistake-owner-text'] }
              id="address-mistake"
            />
          </li>
          <li className={ [styles['calculation-owner__item'], 'calculation-owner__item_order'].join(' ') }>
            <p className={ styles['calculation-owner__title'] }>
              Количество комнат*
            </p>
            <div className={ styles['calculation-owner__inner'] }
              id="rooms-inner"
            >
              <ul className={ styles['calculation-owner__list-rooms'] }>
                <li>
                  <label>
                    <input className={ styles['calculation-owner__input-hidden'] }
                      name="rooms"
                      type="radio"
                      value="studio"
                    />
                    <span className={ [styles['calculation-owner__numb-rooms'], styles['calculation-owner__numb-rooms_ellipse']].join(' ') }>
                      Студия
                    </span>
                  </label>
                </li>
                <li>
                  <label>
                    <input className={ styles['calculation-owner__input-hidden'] }
                      name="rooms"
                      type="radio"
                      value="1 room"
                    />
                    <span className={ styles['calculation-owner__numb-rooms'] }>
                      1
                    </span>
                  </label>
                </li>
                <li>
                  <label>
                    <input className={ styles['calculation-owner__input-hidden'] }
                      name="rooms"
                      type="radio"
                      value="2 rooms"
                    />
                    <span className={ styles['calculation-owner__numb-rooms'] }>
                      2
                    </span>
                  </label>
                </li>
                <li>
                  <label>
                    <input className={ styles['calculation-owner__input-hidden'] }
                      name="rooms"
                      type="radio"
                      value="3+ rooms"
                    />
                    <span className={ styles['calculation-owner__numb-rooms'] }>
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
          <li className={ styles['calculation-owner__item'] }>
            <p className={ styles['calculation-owner__title'] }>
              Время до метро*
            </p>

            <div className={ [styles['calculation-owner__inner'], styles['calculation-owner__inner_pos']].join(' ') }
              id="time-select"
            >
              <CalculationDropdown />

              {/* <select className={[styles['calculation-owner__select'], styles['select2-hidden-accessible']].join(' ')} id="calculation-select" name="time_to_metro" data-select2-id="select2-data-calculation-select" tabIndex={-1} aria-hidden="true">
                            <option value="choose" data-select2-id="select2-data-2-m8rf">
                                Выбрать
                            </option>
                            <option value="15 minutes">
                                15 минут
                            </option>
                            <option value="5 minutes">
                                5 минут
                            </option>
                            <option value="20 minutes">
                                20 минут
                            </option>
                            <option value="10 minutes">
                                10 минут
                            </option>
                            <option value="25 minutes and more">
                                25 минут +
                            </option>
                        </select> */}

              {/* <span className={[styles['select2'], styles['select2-container'], styles['select2-container--default']].join(' ')} dir="ltr" data-select2-id="select2-data-1-fz8b" >
                          <span className={styles['selection']}>
                            <span className={[styles['select2-selection'], styles['select2-selection--single'], styles['calculation-owner__select-container']].join(' ')} role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-calculation-select-container" aria-controls="select2-calculation-select-container">
                            <span className={styles['select2-selection__rendered']} id="select2-calculation-select-container" role="textbox" aria-readonly="true" title="
                                Выбрать
                            ">
                                Выбрать
                            </span>
                            <span className={styles['select2-selection__arrow']} role="presentation"><b role="presentation"></b>
                            </span>
                            </span>
                          </span>
                            <span className={styles['dropdown-wrapper']} aria-hidden="true">
                            </span>
                        </span> */}
              {/* <div className={styles['calculation-owner__route']}>
                            <label>
                                <input checked={true} className={styles['calculation-owner__input-hidden']} type="radio" name="route"  value="man-route"/>
                                <svg className={styles['calculation-owner__img-route']} width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.3333 14.6669L22.5418 13.0291L19.5545 9.65614L13.9995 8L6.21802 14.3183L7.99958 16.6671L12.6954 12.9796L11.919 16.7628L10.6661 21.3337L6.66542 26.0006L9.33216 28.0006L13.5387 23.6725L15.3329 20.0004L16.6657 23.3338L17.3324 28.0006H20.6658L20.043 20.4014L18.7338 17.1757L19.3331 14.0002L21.0136 15.6723L23.9999 17.3336L25.3333 14.6669Z"></path>
                                    <path d="M17.3329 7.99951C18.8057 7.99951 19.9996 6.80557 19.9996 5.33276C19.9996 3.85996 18.8057 2.66602 17.3329 2.66602C15.8601 2.66602 14.6661 3.85996 14.6661 5.33276C14.6661 6.80557 15.8601 7.99951 17.3329 7.99951Z"></path>
                                    </svg>
                            </label>
                            <label>
                                <input className={styles['calculation-owner__input-hidden']} type="radio" name="route" value="bus-route"/>
                                <svg className={styles['calculation-owner__img-route']} width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.33337 21.3337C5.33337 22.507 5.85337 23.5603 6.66671 24.2937V26.667C6.66671 27.4003 7.26671 28.0003 8.00004 28.0003H9.33337C10.0667 28.0003 10.6667 27.4003 10.6667 26.667V25.3337H21.3334V26.667C21.3334 27.4003 21.9334 28.0003 22.6667 28.0003H24C24.7334 28.0003 25.3334 27.4003 25.3334 26.667V24.2937C26.1467 23.5603 26.6667 22.507 26.6667 21.3337V8.00033C26.6667 3.33366 21.8934 2.66699 16 2.66699C10.1067 2.66699 5.33337 3.33366 5.33337 8.00033V21.3337ZM10 22.667C8.89337 22.667 8.00004 21.7737 8.00004 20.667C8.00004 19.5603 8.89337 18.667 10 18.667C11.1067 18.667 12 19.5603 12 20.667C12 21.7737 11.1067 22.667 10 22.667ZM22 22.667C20.8934 22.667 20 21.7737 20 20.667C20 19.5603 20.8934 18.667 22 18.667C23.1067 18.667 24 19.5603 24 20.667C24 21.7737 23.1067 22.667 22 22.667ZM24 14.667H8.00004V8.00033H24V14.667Z"></path>
                                    </svg>
                            </label>
                        </div> */}
            </div>

            <span className={ [styles['mistake-owner-text'], 'mistake-owner-text-z-index'].join(' ') }
              id="time-mistake"
            />
          </li>
          <li className={ styles['calculation-owner__item'] }>
            <p className={ styles['calculation-owner__title'] }>
              Телефон для обратной связи*
            </p>
            <input className={ [styles['calculation-owner__inner'], styles['calculation-owner__inner_phone']].join(' ') }
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
        <p className={ [styles['calculation-owner__title'], 'calculation-owner__title_mb'].join(' ') }>
          Состояние квартиры
        </p>
        <ul className={ styles['calculation-owner__list-repair'] }>
          <li className={ styles['calculation-owner__item-repair'] }>
            <label>
              <div className={ styles['calculation-owner__label-repair'] }>
                <img alt="repair-old"
                  className={ styles['calculation-owner__img-repair'] }
                  height="172"
                  src="./images/owners/repair-old.png"
                  width="284"
                />
                <span className={ styles['calculation-owner__text-repair'] }>
                  Очень старый ремонт
                </span>
                <input className={ styles['calculation-owner__input-hidden'] }
                  name="repair"
                  type="radio"
                  value="repair-old"
                />
                <span className={ styles['calculation-owner__check-repair'] } />
              </div>
            </label>
          </li>
          <li className={ styles['calculation-owner__item-repair'] }>
            <label>
              <div className={ styles['calculation-owner__label-repair'] }>
                <img alt="repair-cosmetic"
                  className={ styles['calculation-owner__img-repair'] }
                  height="172"
                  src="./images/owners/repair-cosmetic.png"
                  width="284"
                />
                <span className={ styles['calculation-owner__text-repair'] }>
                  Косметический ремонт
                </span>
                <input className={ styles['calculation-owner__input-hidden'] }
                  name="repair"
                  type="radio"
                  value="repair-cosmetic"
                />
                <span className={ styles['calculation-owner__check-repair'] } />
              </div>
            </label>
          </li>
          <li className={ styles['calculation-owner__item-repair'] }>
            <label>
              <div className={ styles['calculation-owner__label-repair'] }>
                <img alt="high-quality"
                  className={ styles['calculation-owner__img-repair'] }
                  height="172"
                  src="/images/owners/repair-high-quality.png"
                  width="284"
                />
                <span className={ styles['calculation-owner__text-repair'] }>
                  Качественный ремонт и мебель
                </span>
                <input className={ styles['calculation-owner__input-hidden'] }
                  name="repair"
                  type="radio"
                  value="repair-high-quality"
                />
                <span className={ styles['calculation-owner__check-repair'] } />
              </div>
            </label>
          </li>
          <li className={ styles['calculation-owner__item-repair'] }>
            <label>
              <div className={ styles['calculation-owner__label-repair'] }>
                <img alt="repair-designer"
                  className={ styles['calculation-owner__img-repair'] }
                  height="172"
                  src="/images/owners/repair-designer.png"
                  width="284"
                />
                <span className={ styles['calculation-owner__text-repair'] }>
                  Дизайнерский ремонт и мебель
                </span>
                <input className={ styles['calculation-owner__input-hidden'] }
                  name="repair"
                  type="radio"
                  value="repair-designer"
                />
                <span className={ styles['calculation-owner__check-repair'] } />
              </div>
            </label>
          </li>
        </ul>
        <p className={ styles['calculation-owner__text-proposal'] }>
          Проанализируем предложения в вашем районе и перезвоним в течении 15 минут.
        </p>
        <label className={ styles['calculation-owner__agreement'] }>
          <input className={ styles['calculation-owner__input-hidden'] }
            id="agreement-checkbox"
            type="checkbox"
          />
          <span className={ styles['calculation-owner__agreement-check'] }
            id="checkbox-inner"
          />
          <span className={ styles['mistake-owner-text-checkbox'] }
            id="checkbox-mistake"
          />
          <span className={ styles['calculation-owner__agreement-text'] }>
            Нажимая на кнопку, вы даете
            {' '}
            <a href="/documents/privacy"
              target="_blank"
            >
              согласие на Обработку персональных данных
            </a>
          </span>
        </label>
        <ButtonGeneral text='Заказать расчет'
          type='submit'
        />
        {/* <button className={styles['calculation-owner__btn']} type="submit" id="btn-calculation" data-tag-manager="calculate-form">
                Заказать раcчёт
            </button> */}
        <img alt="phone-calculation"
          className={ styles['calculation-owner__img-phone'] }
          height="223"
          src="/images/owners/phone-calculation.png"
          width="262"
        />

        {/* </ul> */}

      </form>

      {/* <ButtonGeneral text='Заказать расчет'/>
      <Input type={'name'} autoFocus={false} autoComplete={''} label={''} required={false} error={''} className={''}/> */}

    </div>
  )
}

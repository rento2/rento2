import { useState } from "react";
import Layout from "../components/layout";
import formStyles from "../styles/form.module.css";

interface FormData {
  price_from: string;
  price_to: string;
  time_to_metro_from: string;
  time_to_metro_to: string;
  distance: string;
  rooms: string;
  beds: string;
  area_size_from: string;
  area_size_to: string;
  parking: Boolean;
  coffee: Boolean;
  conditioning: Boolean;
};

const objectFormData = {
  price_from: '',
  price_to: '',
  time_to_metro_from: '',
  time_to_metro_to: '',
  distance: '',
  rooms: '',
  beds: '',
  area_size_from: '',
  area_size_to: '',
  parking: false,
  coffee: false,
  conditioning: false,
};

const API = '';

export default function form() : JSX.Element {
  const [value, setValue] = useState<FormData>(objectFormData);

  const handleInput = (
    e: any
  ) => {
    setValue({...value, [e.target.name]: e.target.value});
  };

  const handleCheckbox = (
    e: any
  ) => {
    setValue({...value, [e.target.name]: e.target.checked});
  }

  const handleSubmit = (
    e: any
  ) => {
    e.preventDefault();
    //Данные с формы
    console.log(value)

    console.log('Запрос на сервер')
    const response = fetch(API, {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(value),
    });

    response.
      then((res) => {
        if(res.status !== 200) {
          throw new Error(`HTTP error! status: ${res.status}`)
        } else {
          return res.json();
        }
      }).
      then((data) => {
        console.log(data)
      }).catch((reason) => {
        console.log(reason)
      });

    e.target.reset();
  }

  return (
    <Layout>
      <form action="#" onSubmit={handleSubmit}>
      <div>
        <h2>
          Диапазон цены
        </h2>
        <div className={formStyles['colums-2']}>
          <input
            className={formStyles['input-text']}
            type="text"
            name="price_from"
            placeholder="От"
            onChange={handleInput}
          />
          <input
            className={formStyles['input-text']}
            type="text"
            name="price_to"
            placeholder="До"
            onChange={handleInput}
          />
        </div>
      </div>
      <div>
        <h2>
          Время до метро
        </h2>
        <div className={formStyles['colums-2']}>
          <input
            className={formStyles['input-text']}
            type="text"
            name="time_to_metro_from"
            placeholder="От"
            onChange={handleInput}
            />
          <input
            className={formStyles['input-text']}
            type="text"
            name="time_to_metro_to"
            placeholder="До"
            onChange={handleInput}
            />
        </div>
      </div>
      <div>
        <h2>
          Удаленность от центра
        </h2>
        <div className={formStyles['colums-3']}>
          <label className={formStyles['label-radio']}>
            <span>
              В пределах Садового кольца
            </span>
            <input
              type="radio"
              name="distance"
              value="gr"
              onChange={handleInput}
            />
          </label>
          <label className={formStyles['label-radio']}>
            <span>
              В пределах ТТК
            </span>
            <input
              type="radio"
              name="distance"
              value="trr"
              onChange={handleInput}
            />
          </label>
          <label className={formStyles['label-radio']}>
            <span>
              В пределах МКАД
            </span>
            <input
              type="radio"
              name="distance"
              value="mrr"
              onChange={handleInput}
            />
          </label>
        </div>
      </div>
      <div>
        <h2>
          Комнаты и кровати
        </h2>
        <div className={formStyles['colums-2']}>
          <p>
            Комнаты
          </p>
          <input
            className={formStyles['input-text']}
            type="text"
            name="rooms"
            placeholder="Количество комнат"
            onChange={handleInput}
          />
        </div>
        <div className={formStyles['colums-2']}>
          <p>
            Кровати
          </p>
          <input
            className={formStyles['input-text']}
            type="text"
            name="beds"
            placeholder="Количество кроватей"
            onChange={handleInput}
          />
        </div>
      </div>
      <div>
        <h2>
          Площадь квартиры
        </h2>
        <div className={formStyles['colums-2']}>
          <input
            className={formStyles['input-text']}
            type="text"
            name="area_size_from"
            placeholder="От"
            onChange={handleInput}
          />
          <input
            className={formStyles['input-text']}
            type="text"
            name="area_size_to"
            placeholder="До"
            onChange={handleInput}
          />
        </div>
      </div>
      <div>
        <h2>
          Удобства
        </h2>
        <div className={formStyles['colums-2']}>
          <label className={formStyles['label-checkbox']}>
            <input
              className={formStyles['input-checkbox']}
              type="checkbox"
              name="parking"
              onChange={handleCheckbox}
            />
            <span>
              Парковка рядом
            </span>
          </label>
          <label className={formStyles['label-checkbox']}>
            <input
              className={formStyles['input-checkbox']}
              type="checkbox"
              name="coffee"
              onChange={handleCheckbox}
            />
            <span>
              Кофеварка
            </span>
          </label>
          <label className={formStyles['label-checkbox']}>
            <input
              className={formStyles['input-checkbox']}
              type="checkbox"
              name="conditioning"
              onChange={handleCheckbox}
            />
            <span>
              Кондиционер
            </span>
          </label>
          <label className={formStyles['label-checkbox']}>
            <input
              className={formStyles['input-checkbox']}
              type="checkbox"
              name="dishwasher"
              onChange={handleCheckbox}
            />
            <span>
              Посудомойка
            </span>
          </label>
        </div>
      </div>
      <button className={formStyles['button']} type="submit">Показать варианты</button>
      </form>
    </Layout>
  )
}

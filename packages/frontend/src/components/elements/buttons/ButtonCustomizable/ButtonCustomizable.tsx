import styles from './ButtonFillRight.module.scss'
import stylesCustom from './ButtonCustomizableDecoration.module.scss'

/**
 * кастомная кнопка принимающая значения:
 * - button-link - создает кнопку типа a href (ссылку) в виде кнопки типа button
 * - array - создает стрелочную кнопку типа < | >
 * - default - создает стандартную кнопку типа button
 *
 * доступные классы:
 * - button-decoration__round - для link / button - округление с ДВУХ сторон
 * - button-decoration__round-left - для link / button - округление с ЛЕВОЙ стороны
 * - button-decoration__round-right - для link / button - округление с ПРАВОЙ стороны
 *
 * состояния:
 * default - обычное состояние кнопки
 * choisen - когда нажали на кнопку (active)
 * disabled - отключен
 * hover/Focus - наведение, фокус
 *
 * @param propsButton
 * @constructor
 */
export default function ButtonCustomizable (
  propsButton: {
    title: string
    link: string
    tagManager?: string
    classes: string
    type: string
  }): JSX.Element {
  const classesButtonProps = propsButton.classes.split(' ');

  const classesButton = [styles['button'],
    classesButtonProps.map((item) => stylesCustom[item])].join((' '));



  switch (propsButton.type) {
    case 'button-link': {
      return (
        <a
          className={classesButton.toString().replace(/,/g , " ")}
          href={propsButton.link}
        >
          {propsButton.title}
        </a>
      )
    }

    case 'array': {
      return (
        <a href="{}"></a>
      );
    }

    default:
      return (
        <button
          className={classesButton.toString().replace(/,/g , " ")}
          value={propsButton.title}
        >
          {propsButton.title}
        </button>
      )
  }
}

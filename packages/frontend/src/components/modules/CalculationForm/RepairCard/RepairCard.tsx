import InputRadio from '@elements/inputs/InputRadio/InputRadio'
import Image from 'next/image'
import styles from './RepairCard.module.scss'

interface IRepairCard {
  altText: string
  src: string
  spanText: string
  classProps: string
  name: string
  value: string
  spanProps: string
}

export const RepairCard = ({ altText, src, spanText, classProps, name, value, spanProps }: IRepairCard): JSX.Element => {
  return (
    <li className={ styles['item-repair'] }>
      <label>
        <div className={ styles['label-repair'] }>
          <div className={ styles['img-repair'] }>
            <Image
              alt={ altText }
              height={ 172 }
              src={ src }
              width={ 284 }
            />
          </div>
          <span className={ styles['text-repair'] }>
            {spanText}
          </span>
          <InputRadio classProps={ classProps }
            name={ name }
            value={ value }
          />
          <span className={ spanProps } />
        </div>
      </label>
    </li>
  )
}

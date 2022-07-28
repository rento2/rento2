import { FC, useState } from 'react'
import {
  Create,
  TextInput,
  ListProps,
  SimpleForm
} from 'react-admin'

const MetroLineCreate: FC<ListProps> = props => {
  const [color, setColor] = useState('#000000')
  return (
    <Create { ...props }>
      <SimpleForm>
        <TextInput label='Название ветки'
          source='name'
        />
        <TextInput label='Цвет'
          placeholder='#000000'
          source='color'
          onChange={(e) => setColor(e.target.value)}
        />
        <div style={{
          width: '32px',
          height: '32px',
          background: color,
          border: '#000'
        }}
        />
      </SimpleForm>
    </Create>
  )
}

export default MetroLineCreate

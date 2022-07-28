import { FC } from 'react'
import {
  Edit,
  SimpleForm,
  TextInput,
  ListProps
} from 'react-admin'

const MetroLineEdit: FC<ListProps> = props => (
  <Edit { ...props }>
    <SimpleForm>
      <TextInput label='Название ветки'
        source='name'
      />
      <TextInput label='Цвет'
        placeholder='#000000'
        source='color'
      />
    </SimpleForm>
  </Edit>
)

export default MetroLineEdit

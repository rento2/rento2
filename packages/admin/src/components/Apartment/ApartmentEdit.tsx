import { FC } from 'react'
import {
  Edit,
  SimpleForm,
  TextInput,
  ListProps
} from 'react-admin'

const ApartmentEdit: FC<ListProps> = props => (
  <Edit { ...props }>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='latin_name' />
    </SimpleForm>
  </Edit>
)

export default ApartmentEdit

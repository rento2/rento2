import { FC } from 'react'
import {
  Edit,
  TextInput,
  ListProps,
  SimpleForm
} from 'react-admin'

const AccommodationEdit: FC<ListProps> = props => (
  <Edit { ...props }>
    <SimpleForm>
      <TextInput source='id' />
      <TextInput source='name' />
      <TextInput source='name_en' />
    </SimpleForm>
  </Edit>
)

export default AccommodationEdit

import { FC } from 'react'
import {
  Create,
  TextInput,
  ListProps,
  SimpleForm
} from 'react-admin'

const AccommodationCreate: FC<ListProps> = props => (
  <Create { ...props }>
    <SimpleForm>
      <TextInput source='id' />
      <TextInput source='name' />
      <TextInput source='name_en' />
    </SimpleForm>
  </Create>
)

export default AccommodationCreate

import { FC } from 'react'
import {
  Edit,
  SimpleForm,
  TextInput,
  ListProps
} from 'react-admin'

const BannerEdit: FC<ListProps> = props => (
  <Edit { ...props }>
    <SimpleForm>
      <TextInput source='name' />
    </SimpleForm>
  </Edit>
)

export default BannerEdit

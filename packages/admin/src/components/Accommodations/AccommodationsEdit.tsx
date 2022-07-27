import React from 'react'
import {
  Edit,
  SimpleForm,
  TextInput,
  ListProps
} from 'react-admin'

const AccommodationsEdit: React.FC<ListProps> = props => (
  <Edit { ...props }>
    <SimpleForm>
      <TextInput source='type' />
      <TextInput source='name_en' />
    </SimpleForm>
  </Edit>
)

export default AccommodationsEdit

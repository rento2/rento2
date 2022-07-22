import React from 'react'
import {
  Edit,
  SimpleForm,
  TextInput,
  ListProps
} from 'react-admin'

const SleepingPlacesEdit: React.FC<ListProps> = props => (
  <Edit { ...props }>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='type' />
      <TextInput source='size' />
    </SimpleForm>
  </Edit>
)

export default SleepingPlacesEdit

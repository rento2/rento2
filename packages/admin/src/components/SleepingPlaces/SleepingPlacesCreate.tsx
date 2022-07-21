import React from 'react'
import {
  Create,
  TextInput,
  ListProps,
  TabbedForm,
  FormTab
} from 'react-admin'

const SleepingPlacesCreate: React.FC<ListProps> = props => (
  <Create { ...props }>
    <TabbedForm>
      <FormTab label="Step 1">
        <TextInput source='name' />
        <TextInput source='type' />
        <TextInput source='size' />
      </FormTab>
    </TabbedForm>
  </Create>
)

export default SleepingPlacesCreate

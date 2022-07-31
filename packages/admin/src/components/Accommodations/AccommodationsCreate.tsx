import React from 'react'
import {
  Create,
  TextInput,
  ListProps,
  TabbedForm,
  FormTab
} from 'react-admin'

const AccommodationsCreate: React.FC<ListProps> = props => (
  <Create { ...props }>
    <TabbedForm>
      <FormTab label="Данные о квартире">
        <TextInput source='type' />
        <TextInput source='name_en' />
      </FormTab>
    </TabbedForm>
  </Create>
)

export default AccommodationsCreate

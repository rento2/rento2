import { FC } from 'react'
import {
  Create,
  TextInput,
  ListProps,
  TabbedForm,
  FormTab
} from 'react-admin'

const ApartmentCreate: FC<ListProps> = props => (
  <Create { ...props }>
    <TabbedForm>
      <FormTab label="Step 1">
        <TextInput source='name' />
        <TextInput source='latin_name' />
      </FormTab>
    </TabbedForm>
  </Create>
)

export default ApartmentCreate
